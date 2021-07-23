import path from "path";

import express from "express";
import multer from "multer";
import { fs } from "memfs";
import ffmpeg from "fluent-ffmpeg";
import { transcribeAudio } from "./audio-to-text.js";

const app = express();

const upload = multer({ dest: "uploads/" });
app.use(express.static(path.resolve()));

app.post("/", upload.single("filedata"), async function (req, res, _next) {
  let filedata = req.file;
  // const filePath = `/${filedata.originalname}`;
  // const newFileName = `${filePath.split(".")[0]}.mp3`;
  // await fs.promises.writeFile(filePath, filedata.buffer);
  // console.log(filedata);

  ffmpeg(filedata.path)
    .toFormat("mp3")
    .output(fs.createWriteStream(`/${filedata.originalname}`))
    .on("end", async () => {
      const transcript = await transcribeAudio(
        fs.readFileSync(`/${filedata.originalname}`).toString("base64")
      );

      res.send(transcript);
    })
    .run();
});

app.listen(3000);
