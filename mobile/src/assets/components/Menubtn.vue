<template>
  <div class="app-menu__btn" :class="{active:active}" @click="menuClick">
    <span class="app-menu-bar"></span>
    <span class="app-menu-bar"></span>
    <span class="app-menu-bar"></span>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      active: false
    };
  },
  methods: {
    menuClick() {
      this.active = !this.active;
      let sidebarIsOpen = this.active;
      this.$emit("handleMenuClick", sidebarIsOpen);
    }
  },
  created: function() {
    this.$parent.$on("pageChanged", () => {
      this.active = false;
    });
  }
};
</script>

<style>
</style>
