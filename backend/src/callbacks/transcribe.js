import { fs } from "memfs";
import ffmpeg from "fluent-ffmpeg";

import { transcribeAudio } from "../transcribeAudio.js";

export const transcribeRoute = async (req, res, _next) => {
  let filedata = req.file;

  ffmpeg(filedata.path)
    .toFormat("flac")
    .output(fs.createWriteStream(`/${filedata.originalname}`))
    .on("end", async () => {
      const transcript = await transcribeAudio(
        fs.readFileSync(`/${filedata.originalname}`).toString("base64")
      );

      res.send(transcript);
    })
    .run();
};
