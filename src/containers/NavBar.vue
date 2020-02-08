<template>
  <div class="nav-bar">
    <h1>{{details.recitalTitle}}</h1>
    <div class="badge-list">
      <div v-bind:key="index" v-for="(lesson, index) in details.lessonDetails">
        <span
          class="badge badge-secondary"
          :class="getButtonStatus(lesson.id)"
          @click="setLesson(lesson)"
        >{{ index + 1 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "NavBar",
  props: {
    details: Object
  },
  methods: {
    setLesson(lesson) {
      store.commit("selectLesson", { lesson });
    },
    getButtonStatus(id) {
      const { lesson } = store.state;
      const { lessonDetails } = store.state.details;
      const getCompletenessById = lessonDetails.find(data => data.id === id)
        .complete;
      return lesson && lesson.id === id
        ? "selected"
        : getCompletenessById
        ? "completed"
        : "ordinary";
    }
  },
  data() {
    return {
      number:
        store.lesson && store.lesson.lessonTitle === "Lesson 1"
          ? "selected"
          : "ordinary"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.badge-list {
  display: flex;
  justify-content: center;
}
.nav-bar {
  height: 150px;
  border: 1px solid;
}
.ordinary {
  margin: 0 10px;
  width: 30px;
  background-color: rgb(233, 150, 78);
  color: black;
}
.completed {
  margin: 0 10px;
  width: 30px;
  background-color: rgb(176, 245, 155);
  color: black;
}
.selected {
  margin: 0 10px;
  width: 30px;
  background-color: rgb(220, 226, 222);
  color: black;
}
</style>
