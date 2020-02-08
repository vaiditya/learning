<template>
  <div class="card" :class="getCardBorder">
    <div>{{cardDetails.title}}</div>
    <div class="button-list">
      <div>
        <button
          type="button"
          class="btn btn-success"
          @click="changeStatus('DONE',cardDetails,$event)"
        >DONE</button>

        <button
          type="button"
          class="btn btn-danger"
          @click="changeStatus('NOT DOING',cardDetails,$event)"
        >NOT DOING</button>

        <button
          type="button"
          class="btn btn-light"
          @click="changeStatus('DO IT LATER',cardDetails,$event)"
        >DO IT LATER</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: { cardDetails: Object, changeStatusCall: Function },
  computed: {
    getCardBorder() {
      return this.cardDetails.status === "DONE" && "bordered";
    }
  },
  methods: {
    changeStatus(status, cardDetails, event) {
      if (event) {
        event.stopPropagation();
      }
      this.changeStatusCall(status, cardDetails);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  height: 120px;
  margin: 10px;
}
.button-list {
  display: flex;
  justify-content: center;
}
.bordered {
  border: 3px solid rgb(97, 201, 97);
}
.btn {
  width: auto;
}
</style>
