import { fs as memfs } from "memfs";
import fs from "fs";
import { nanoid } from "nanoid";
import { v1p1beta1 as speech } from "@google-cloud/speech";
import { Storage } from "@google-cloud/storage";

import ffmpeg from "fluent-ffmpeg";
import ytdl from "ytdl-core";

import { transcribeAudio } from "../transcribeAudio.js";

const storage = new Storage();

export const transcribeRoute = async (req, res, _next) => {
  let filedata = req.file;
  const { youtubeLink } = req.body;

  if (!filedata && youtubeLink) {
    const fileNanoId = nanoid();
    const audioNanoid = nanoid();

    const stream = fs.createWriteStream(`./cache/${fileNanoId}.mp4`);

    ytdl(youtubeLink, {
      range: { start: 0, end: 9000000 },
    }).pipe(stream);

    stream.on("finish", async () => {
      ffmpeg(`./cache/${fileNanoId}.mp4`)
        .toFormat("flac")
        .outputOptions(["-ac 2", ["-ar 44100"]])
        .output(fs.createWriteStream(`./cache/audio_${audioNanoid}`))
        .on("end", async () => {
          console.log("✅ Uploading to google bucket started");
          await storage
            .bucket("recognisely")
            .upload(`./cache/audio_${audioNanoid}`, {
              destination: `audio_${audioNanoid}`,
            });
          console.log("✅ Uploading to google bucket finished");

          console.log("✅ Transcribing started");
          const transcript = await transcribeAudio(
            `gs://recognisely/audio_${audioNanoid}`
          );

          console.log("✅ Transcribing finished", transcript);
          res.send({ transcript, remoteFileName: `${fileNanoId}.mp4` });
        })
        .run();
    });
  } else {
    ffmpeg(filedata.path)
      .toFormat("flac")
      .outputOptions(["-ac 2", ["-ar 44100"]])
      .output(memfs.createWriteStream(`/${filedata.originalname}`))
      .on("end", async () => {
        const transcript = await transcribeAudio(
          memfs.readFileSync(`/${filedata.originalname}`).toString("base64")
        );
        res.send(transcript);
      })
      .run();
  }
};
