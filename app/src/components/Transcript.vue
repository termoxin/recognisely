<template>
  <p class="transcript">
    <span v-for="word in transcript" :key="word">
      {{ word }}
    </span>
  </p>
</template>

<script>
export default {
  name: "Transcript",
  props: {
    transcript: Array,
  },
};
</script>

<style scoped>
.transcript {
  width: 600px;
  overflow-wrap: break-word;
}

.transcript span {
  margin-left: 5px;
}
</style>
