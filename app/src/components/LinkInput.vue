<template>
  <input
    type="text"
    placeholder="Enter YT link (e.g. https://youtu.be/Bufy6m_-lJY)"
    v-model="youtubeLink"
  />
</template>

<script>
export default {
  name: "LinkInput",
  data() {
    return {
      youtubeLink: "",
    };
  },
  props: {
    onYoutubeLinkTranscribed: Function,
  },
  updated() {
    this.transcribeYoutubeVideo();
  },
  methods: {
    async transcribeYoutubeVideo() {
      const response = await fetch("/api/transcribeVideo", {
        method: "POST",
        body: JSON.stringify({ youtubeLink: this.youtubeLink }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      this.onYoutubeLinkTranscribed(data);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  padding: 10px;
  width: 100%;
  margin-bottom: 1rem;
  font-size: 1rem;
  text-align: left;
  border-radius: 4px;
  box-shadow: 2px 7px 10px 0 rgb(0 0 0 / 10%), 2px 11px 11px 0 rgb(0 0 0 / 10%),
    2px 6px 8px 0 rgb(0 0 0 / 8%), 2px 5px 8px 0 rgb(252 22 0 / 5%);
}
</style>
