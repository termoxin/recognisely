// Imports the Google Cloud client library for Beta API
/**
 * TODO(developer): Update client library import to use new
 * version of API when desired features become available
 */
import { v1p1beta1 as speech } from "@google-cloud/speech";

export const transcribeAudio = async (content) => {
  // Creates a client
  const client = new speech.SpeechClient();

  const model = "video";
  const encoding = "MP3";
  const sampleRateHertz = 16000;
  const languageCode = "en-US";

  const config = {
    encoding: encoding,
    sampleRateHertz: sampleRateHertz,
    languageCode: languageCode,
    model: model,
    speechContexts: [
      {
        phrases: ["meet up with Bean"],
      },
    ],
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
    .join("\n");

  return transcription;
};
