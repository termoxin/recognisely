// Imports the Google Cloud client library for Beta API
/**
 * TODO(developer): Update client library import to use new
 * version of API when desired features become available
 */
import { v1p1beta1 as speech } from "@google-cloud/speech";

export const transcribeAudio = async (content) => {
  // Creates a client
  const client = new speech.SpeechClient();

  const encoding = "FLAC";
  const sampleRateHertz = 44100;
  const languageCode = "en-US";
  const model = "phone_call";

  const config = {
    encoding: encoding,
    sampleRateHertz: sampleRateHertz,
    languageCode: languageCode,
    audioChannelCount: 2,
    useEnhanced: true,
    model,
    enableWordTimeOffsets: true,
  };

  const audio = {
    content,
  };

  const request = {
    config: config,
    audio: audio,
  };

  // Detects speech in the audio file
  const [response] = await client.recognize(request);
  const transcription = response.results
    .map((result) => result.alternatives[0].transcript)
    .filter(Boolean);

  const wordsInfo = [];

  response.results.forEach((result) => {
    wordsInfo.push(
      result.alternatives[0].words.map((wordInfo) => {
        // NOTE: If you have a time offset exceeding 2^32 seconds, use the
        // wordInfo.{x}Time.seconds.high to calculate seconds.
        const startSecs =
          `${wordInfo.startTime.seconds}` +
          "." +
          wordInfo.startTime.nanos / 100000000;
        const endSecs =
          `${wordInfo.endTime.seconds}` +
          "." +
          wordInfo.endTime.nanos / 100000000;
        console.log(`Word: ${wordInfo.word}`);
        console.log(`\t ${startSecs} secs - ${endSecs} secs`);

        return {
          startSecs: +startSecs,
          endSecs: +endSecs,
          word: wordInfo.word,
        };
      })
    );
  });

  return wordsInfo;
};
