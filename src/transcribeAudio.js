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

  return transcription;
};
