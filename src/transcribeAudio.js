// Imports the Google Cloud client library for Beta API
/**
 * TODO(developer): Update client library import to use new
 * version of API when desired features become available
 */
import { v1p1beta1 as speech } from "@google-cloud/speech";
import { nanoid } from "nanoid";
import { Storage } from "@google-cloud/storage";

const storage = new Storage();

export const transcribeAudio = async (gcsUri) => {
  // Creates a client

  const client = new speech.SpeechClient();

  const encoding = "FLAC";
  const sampleRateHertz = 44100;
  const languageCode = "en-US";
  const model = "video";

  const audio = {
    uri: gcsUri,
  };

  const outputId = nanoid(10);

  const config = {
    encoding,
    sampleRateHertz,
    languageCode,
    audioChannelCount: 2,
    model,
    sampleRateHertz,
    useEnhanced: true,
    enableWordTimeOffsets: true,
  };

  const outputGcsUri = `gs://recognisely/${outputId}`;

  const request = {
    audio: audio,
    config: config,
    outputConfig: {
      gcsUri: outputGcsUri,
    },
  };

  // Detects speech in the audio file
  console.log(outputGcsUri);
  const response = await client.longRunningRecognize(request);

  const getFile = async () => {
    return new Promise(async (resolve) => {
      setTimeout(async () => {
        const json = await storage
          .bucket("recognisely")
          .file(outputId)
          .download();

        resolve(JSON.parse(json));
      }, 60000);
    });
  };

  console.log("timer");

  const result = await getFile();

  const wordsInfo = [];

  result.results.forEach((result) => {
    console.log(result.alternatives[0]);

    if (result.alternatives[0]?.words) {
      wordsInfo.push(
        result.alternatives[0].words.map((wordInfo) => {
          // const startSecs =
          //   `${wordInfo.startTime.seconds}` +
          //   "." +
          //   wordInfo.startTime.nanos / 100000000;
          // const endSecs =
          //   `${wordInfo.endTime.seconds}` +
          //   "." +
          //   wordInfo.endTime.nanos / 100000000;
          return {
            startSecs: parseFloat(wordInfo.startTime),
            endSecs: parseFloat(wordInfo.endTime),
            word: wordInfo.word,
          };
        })
      );
    }
  });

  return wordsInfo;
};
