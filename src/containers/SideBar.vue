<template>
  <div class="side-bar">
    <h2>{{lessonDetails.lessonTitle}}</h2>
    <div v-bind:key="index" v-for="(objective,index) in lessonDetails.objectiveDetails">
      <div @click="setObjective(objective)" :value="objective">
        <Card :cardDetails="objective" :changeStatusCall="changeStatus" />
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import Card from "../components/Card";
export default {
  name: "SideBarContainer",
  props: { lessonDetails: Object },
  components: { Card },
  methods: {
    setObjective(objective) {
      store.commit("selectObjective", { objective });
    },
    async changeStatus(status, objective) {
      await store.commit("selectObjective", { objective });
      await store.commit("changeStatus", { status });
      await store.commit("checkCompleteness");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-bar {
  width: 30%;
  max-height: 400px;
  overflow-y: scroll;
}
</style>
