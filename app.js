import express from "express";
import path from "path";
import { promises as fs } from "fs";
import cookieParser from "cookie-parser";
import logger from "morgan";
import multer from "multer";

import { transcribeRoute } from "./src/callbacks/transcribe.js";
import { getContextRoute } from "./src/callbacks/getContext.js";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.resolve(), "public")));
app.use(express.static(path.join(path.resolve(), "./app/dist")));

const upload = multer({ dest: "cache/" });

app.get("/", (_, res) => res.sendFile(path.join(path.resolve(), "./app/dist")));

app.post("/api/transcribeVideo", upload.single("filedata"), transcribeRoute);
app.get("/api/getContext", getContextRoute);

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

app.listen(process.env.PORT || 3000, async () => {
  if (process.env.HEROKU) {
    const ffmpegPath = require("@ffmpeg-installer/ffmpeg").path;
    const ffmpeg = require("fluent-ffmpeg");
    ffmpeg.setFfmpegPath(ffmpegPath);

    await fs.writeFile(
      path.join(path.resolve(), "google-credentials.json"),
      process.env.GOOGLE_CREDENTIALS
    );
  }
});
