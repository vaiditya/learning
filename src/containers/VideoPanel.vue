<template>
  <div class="video-bar">
    <div>{{ objectiveDetails.title }}</div>
    <div class="video-container">
      <div class="video-section">
        <div v-bind:key="index" v-for="(video, index) in objectiveDetails.objectiveVideosDetails">
          <iframe
            :src="video.url"
            width="100%"
            height="100%"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoContainer",
  props: { objectiveDetails: Object }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video-section {
  height: 400px;
  width: 400px;
  padding: 50px;
}
.video-container {
  display: flex;
  justify-content: center;
}

.video-bar {
  width: 80%;
  max-height: 500px;
  overflow: hidden;
}
</style>
