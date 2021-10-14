<template>
  <Transcript
    v-bind:transcript="transcript"
    v-if="transcript.length"
    v-bind:previewUrl="previewUrl"
  />

  <div class="fileUploader" v-else>
    <LinkInput />

    <label for="upload-video">
      <p v-if="!file && !isLoading">Select a file</p>
      <div class="lds-ring" v-else>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </label>

    <input
      type="file"
      @change="uploadVideo($event)"
      accept="video/mp4"
      id="upload-video"
      class="fileUploader__input"
    />
  </div>
</template>

<script>
import { nanoid } from "nanoid";

import Transcript from "./Transcript.vue";
import LinkInput from "./LinkInput.vue";

export default {
  name: "FileUploader",
  components: {
    Transcript,
    LinkInput,
  },
  data() {
    return {
      transcript: [],
      file: null,
      previewUrl: null,
      isLoading: false,
    };
  },
  methods: {
    createPreviewUrl(file) {
      const blob = new Blob([file], { type: "video/mp4" });
      const url = URL.createObjectURL(blob);
      return url;
    },
    async uploadAndTranscribeVideo(file) {
      let formData = new FormData();
      formData.append("filedata", file);

      const response = await fetch("/api/transcribeVideo", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      return data;
    },
    splitByWords(str) {
      const words = str.replace(/([ .,;]+)/g, "$1§sep§").split("§sep§");

      return words.map((word) => word.replaceAll(/[.,!?]+/g, "").trim());
    },
    async uploadVideo(e) {
      this.isLoading = true;
      this.file = e.currentTarget.files[0];

      const data = await this.uploadAndTranscribeVideo(this.file);

      this.transcript = this.splitByWords(
        data[0].map((wordInfo) => wordInfo.word).join(" ")
      ).map((word, index) => ({
        id: nanoid(),
        word,
        startSecs: data[0][index].startSecs,
        endSecs: data[0][index].endSecs,
      }));

      this.isLoading = false;
      this.previewUrl = this.createPreviewUrl(this.file);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin: 50px;
}

.fileUploader__input {
  display: none;
}

label {
  font-size: 16px;
  padding: 10px 40px;
  font-weight: 400;
  line-height: 1.6;
  text-align: center;
  background-color: #f33;
  color: #fff;
  border-radius: 4px;
  user-select: none;
  width: 100%;
  max-width: 455px;
  box-shadow: 2px 7px 10px 0 rgba(0, 0, 0, 0.1),
    2px 11px 11px 0 rgba(0, 0, 0, 0.1), 2px 6px 8px 0 rgba(0, 0, 0, 0.08),
    2px 5px 8px 0 rgba(252, 22, 0, 0.05);
  cursor: pointer;
}

.fileUploader {
  display: flex;
  flex-direction: column;
  padding: 60px;
  margin: 30px;
  width: 500px;
  align-items: center;

  background-color: #3c3c3c;
  background-image: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0.06) 25%,
      transparent 0
    ),
    linear-gradient(-45deg, rgba(0, 0, 0, 0.06) 25%, transparent 0),
    linear-gradient(45deg, transparent 75%, rgba(0, 0, 0, 0.06) 0),
    linear-gradient(-45deg, transparent 75%, rgba(0, 0, 0, 0.06) 0);
  background-size: 24px 24px;
  background-position: 0 0, 0 12px, 12px -12px, -12px 0;
}

.lds-ring {
  display: inline-block;
  position: relative;
  width: 45px;
  height: 35px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  margin: 8px;
  border: 4px solid #fff;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
