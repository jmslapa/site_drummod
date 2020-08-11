<template>
  <div class="index">
    <div class="index__frame"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: {
        name: "index",
        frontTitle: ""
      }
    };
  },
  created() {
    this.$emit("notHomePage", this.page);
  }
};
</script>

<style>
</style>
