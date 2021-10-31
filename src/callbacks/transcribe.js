import { fs as memfs } from "memfs";
import fs from "fs";
import { nanoid } from "nanoid";

import ffmpeg from "fluent-ffmpeg";
import ytdl from "ytdl-core";

import { transcribeAudio } from "../transcribeAudio.js";

export const transcribeRoute = async (req, res, _next) => {
  let filedata = req.file;
  const { youtubeLink } = req.body;

  if (!filedata && youtubeLink) {
    const fileNanoId = nanoid();
    const audioNanoid = nanoid();
    const stream = fs.createWriteStream(`./cache/${fileNanoId}.mp4`);

    ytdl(youtubeLink, {
      range: { start: 0, end: 1500000 },
    }).pipe(stream);

    stream.on("finish", async () => {
      ffmpeg(`./cache/${fileNanoId}.mp4`)
        .toFormat("flac")
        .outputOptions(["-ac 2", ["-ar 44100"]])
        .output(fs.createWriteStream(`./cache/audio_${audioNanoid}`))
        .on("end", async () => {
          console.log("start trans");
          const transcript = await transcribeAudio(
            fs.readFileSync(`./cache/audio_${audioNanoid}`).toString("base64")
          );
          console.log("finished trans", transcript);
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
