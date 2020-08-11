<template>
  <aside class="sidebar" :class="{active:this.active}">
    <!-- <div class="sidebar__bg" :style="{backgroundImage:'url('+pageBg+')'}"></div> -->
    <!-- <div class="sidebar__bg"></div> -->
    <nav class="sidebar__nav">
      <ul class="sidebar__list">
        <li lass="sidebar__item" :key="page.id" v-for="page in pages">
          <a
            :href="page.id"
            class="sidebar__link"
            :class="{active:page.page==currentPage}"
            @click="changePage(page)"
          >{{page.title}}</a>
        </li>
      </ul>
      <!-- <div class="sidebar__lang">
        <a href="#" class="sidebar__lang-btn">BR</a>
        <a href="#" class="sidebar__lang-btn">PT</a>
      </div>-->
    </nav>
  </aside>
</template>

<script>
import DrummndOutline from "../pages/assets/Drummond-outline";
export default {
  data() {
    return {
      currentPage: "appIndex",
      active: false,
      pages: [
        { id: "#inicio", title: "início", page: "appIndex" },
        { id: "#sobre", title: "sobre", page: "appSobre" },
        { id: "#servicos", title: "serviços", page: "appServicos" },
        { id: "#equipe", title: "equipe", page: "appEquipe" },
        { id: "#contato", title: "contato", page: "appContato" }
      ],
      appBg: [
        "./src/assets/images/first.png",
        "./src/assets/images/second.png"
      ],
      pageBg: "./src/assets/images/first.png"
    };
  },
  methods: {
    setValue: function() {
      this.active = !this.active;
    },
    changePage: function(page) {
      // var index = this.pages.indexOf(page);
      // this.pageBg = this.appBg[index];

      this.active = !this.active;
      this.$emit("changePage", page);
      if (this.active && this.currentPage == page.page) {
        return null;
      } else {
        this.currentPage = page.page;
      }
    }
  },
  created: function(value) {
    this.$parent.$on("menuClick", this.setValue);
    this.$parent.$on("menuSpy", page => {});
  }
};
</script>

