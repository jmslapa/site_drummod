<template>
  <div
    class="app"
    id="app"
    :class="{active:sidebarActive,'app-equipe':currentPage=='equipe','app-sobre':currentPage=='sobre'}"
  >
    <app-menubtn @handleMenuClick="openMenu"></app-menubtn>
    <app-sidebar @changePage="handleChangePage"></app-sidebar>
    <main class="app-main">
      <div class="app-main__logo" :class="{top:!isHomePage}">
        <logo-svg></logo-svg>
      </div>
      <div class="app-main__title">
        <title-drummond v-show="isHomePage"></title-drummond>
      </div>
      <div class="app__square top" :class="{active:!sidebarActive}" v-show="isHomePage"></div>
      <!-- <div class="app__stripe left" v-show="isHomePage" :class="{active:sidebarActive}"></div> -->

      <component @notHomePage="notHomePage" :is="pageComponent"></component>
    </main>
  </div>
</template>

<script>
import Menubtn from "./assets/components/Menubtn";
import Sidebar from "./assets/components/Sidebar";

// import pages
import Index from "./assets/pages/Index";
import Sobre from "./assets/pages/Sobre";
import Servicos from "./assets/pages/Servicos";
import Equipe from "./assets/pages/Equipe";
import Contato from "./assets/pages/Contato";

//ASSETS
import logoSvg from "./assets/pages/assets/Logo";
import titleDrummond from "./assets/pages/assets/Drummond";

export default {
  name: "app",
  data() {
    return {
      sidebarActive: false,
      pageComponent: "appIndex",
      isHomePage: true,
      currentPage: "index"
    };
  },
  components: {
    appMenubtn: Menubtn,
    appSidebar: Sidebar,
    appIndex: Index,
    appSobre: Sobre,
    appServicos: Servicos,
    appEquipe: Equipe,
    appContato: Contato,
    logoSvg,
    titleDrummond
  },
  methods: {
    notHomePage: function(page) {
      this.isHomePage = true;
      if (page.name != "index") {
        this.isHomePage = false;
      }
      // else {
      //   this.isHomePage = true;
      // }
      this.currentPage = page.name;
    },
    HomePage: function() {
      this.isHomePage = true;
    },
    openMenu: function(sidebarIsOpen) {
      this.sidebarActive = sidebarIsOpen;
      this.appClick();
      let isPage = document.querySelector(".app");
      isPage.addEventListener("click", sidebarIsOpen => {
        if (sidebarIsOpen) {
          this.handleChangePage(this.pageComponent);
        }
      });
    },
    appClick: function() {
      this.$emit("menuClick", this.sidebarActive);
    },
    handleChangePage: function(page) {
      if (page instanceof Object) {
        if (page.page != "appIndex") {
          this.isHomePage = false;
        }
        this.sidebarActive = !this.sidebarActive;
        this.pageComponent = page.page;
        this.$emit("pageChanged");
      }
      // this.$emit("menuSpy", page.page);
    },
    touchScreen: function() {
      let currentPage = "";
      let screen = document.querySelector("#app");
      let pages = ["index", "sobre", "equipe", "servicos", "contato"];
      let appPages = [
        "appIndex",
        "appSobre",
        "appEquipe",
        "appServicos",
        "appContato"
      ];

      let start = 0;
      let end = 0;
      let touchOffset = 0;
      screen.addEventListener("touchstart", e => {
        start = e.changedTouches[0].clientX;
      });
      screen.addEventListener("touchend", e => {
        let count = pages.indexOf(this.currentPage);
        end = e.changedTouches[0].clientX;
        touchOffset = Math.abs(start - end);
        if (touchOffset > 100) {
          if (start > end) {
            let nextPage = pages.indexOf(this.currentPage) + 1;
            let appP = appPages[nextPage];
            if (count < 4) {
              this.pageComponent = appP;
            }
          } else {
            // start < end
            let nextPage = pages.indexOf(this.currentPage) - 1;
            let appP = appPages[nextPage];
            if (count >= 1) {
              this.pageComponent = appP;
            }
          }
        }
        // console.log(touchOffset);
      });
    }
  },
  mounted: function() {
    this.touchScreen();
    // let isPage = document.querySelector(".app");
    // isPage.addEventListener("click", () => {
    //   if (this.sidebarActive) {
    //     this.handleChangePage();
    //   }
    // });
  }
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";
</style>
