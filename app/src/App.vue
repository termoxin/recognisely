<template>
  <div class="container">
    <FileUploader />
  </div>
</template>

<script>
import FileUploader from "./components/FileUploader.vue";
import "./assets/global.css";

export default {
  name: "App",
  components: {
    FileUploader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
</style>
