<template>
  <div>
    <NavBar :details="details" :setLesson="setLesson" />
    <div class="dashboard">
      <SideBar :lessonDetails="selectedLesson" />
      <VideoPanel :objectiveDetails="selectedObjective" />
    </div>
  </div>
</template>

<script>
import NavBar from "../containers/NavBar";
import SideBar from "../containers/SideBar";
import VideoPanel from "../containers/VideoPanel";
import store from "../store";

export default {
  name: "dashboard",
  components: {
    NavBar,
    SideBar,
    VideoPanel
  },
  store,
  computed: {
    details() {
      return store.state.details;
    },
    selectedLesson() {
      return store.state.lesson;
    },
    selectedObjective() {
      return store.state.objective;
    }
  },
  methods: {
    getAllDetails() {
      store.commit("getAllDetails");
    }
  },
  mounted() {
    this.getAllDetails();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}
.dashboard {
  display: flex;
  max-height: 425px;
  overflow-y: overlay;
}
</style>
