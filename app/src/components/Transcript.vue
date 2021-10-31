<template>
  <div class="container">
    <div class="transcript-container">
      <video
        v-bind:src="previewUrl"
        width="500"
        controls
        v-on:timeupdate="updateVideoPlayback($event)"
      />
      <p class="transcript">
        <span
          v-for="word in transcript"
          v-on:click="addTranslation($event, word.id)"
          v-bind:class="{
            selected: phrase.includes(word.id),
            playing: word.startSecs <= currentTime,
          }"
          :key="word.id"
        >
          {{ word.word + " " }}
        </span>
      </p>
    </div>
    <div class="phrase-info-container">
      <PhraseInfo v-bind:phraseInfo="phraseInfo" v-if="phraseInfo" />
    </div>
  </div>
</template>

<script>
import PhraseInfo from "./PhraseInfo.vue";

export default {
  name: "Transcript",
  components: {
    PhraseInfo,
  },
  data() {
    return {
      phraseInfo: null,
      playingWordId: null,
      firstLanguage: "English",
      secondLanguage: "Russian",
      phrase: [],
      currentTime: 0,
    };
  },
  props: {
    previewUrl: String,
    transcript: Array,
  },
  methods: {
    async fetchTranslation(phrase) {
      const baseUri = "/api/getContext";
      const url = `${baseUri}?text=${phrase}&firstLanguage=${this.firstLanguage}&secondLanguage=${this.secondLanguage}`;
      const response = await fetch(url);
      const data = await response.json();

      return data;
    },
    async addTranslation(event, wordId) {
      if (event.shiftKey) {
        this.phrase.push(wordId);
      } else if (!event.shiftKey) {
        this.phrase.push(wordId);

        const sentence = this.transcript
          .filter((word) => this.phrase.includes(word.id))
          .map((word) => word.word)
          .join(" ");

        const context = await this.fetchTranslation(sentence);

        this.phraseInfo = context;
        this.phrase = [];
      }
    },
    updateVideoPlayback(event) {
      this.currentTime = event.target.currentTime;
    },
  },
};
</script>

<style scoped>
video {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.container {
  display: flex;
}

.phrase-info-container {
  padding: 50px;
}

.transcript-container {
  display: flex;
  flex-direction: column;
}

.transcript {
  text-align: start;
  width: 800px;
  overflow-wrap: break-word;
  user-select: none;
  margin-top: 20px;
}

.transcript span {
  transition: 0.3s all;
  cursor: pointer;
  font-size: 21px;
}

.transcript span:hover {
  transition: 0.3s all;
  font-weight: 900;
  box-shadow: 1px 1px 20px 1px lightgrey;
}

.selected {
  font-weight: 900;
  box-shadow: 1px 1px 1px 1px lightgrey;
  color: #ff5722;
}

.playing {
  box-shadow: 1px 1px 20px 1px #d3d3d3;
  color: #4c4c4c;
  background: #ffeb3b;
}
</style>
