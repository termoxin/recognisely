<template>
  <div>
    <h1>
      {{ phraseInfo.text }}
      {{
        phraseInfo?.translation.length
          ? `— ${phraseInfo?.translation.slice(0, 3).join(", ")}`
          : ""
      }}
    </h1>
    <div class="examples-container">
      <div
        v-for="example in phraseInfo.examples.slice(0, 3)"
        :key="example.id"
        class="example"
      >
        <p>{{ example.from }}</p>
        <p>{{ example.to }}</p>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhraseInfo",
  props: {
    phraseInfo: Object,
  },
};
</script>

<style scoped>
h1 {
  text-align: start;
  margin-bottom: 20px;
}

.examples-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.example {
  display: flex;
  flex-direction: column;
  text-align: start;
}
</style>
