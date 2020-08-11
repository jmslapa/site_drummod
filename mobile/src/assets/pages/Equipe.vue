<template>
  <section id="equipe" class="equipe is-page">
    <div class="app__square top"></div>
    <h1 class="page__title animated fadeInLeft" :style="{color:titleColor}">
      {{page.frontTitle}}
      <Somos15Mil :style="{opacity: titleColor==='#111'?0:1}" />
    </h1>
    <p
      class="equipe__text animated fadeIn"
    >Pessoas que inspiram confiança, profissionalismo, segurança e lealdade nos processos executados. Tais qualidades refletem a maneira como conduzimos e realizamos os nossos serviços, com muito comprometimento e responsabilidade.</p>
    <div class="equipe__slider animated fadeInUp">
      <div class="equipe__slider-indicators">
        <span class="tk-sirba-web indicator">{{countPics}}</span>/
        <span class="tk-sirba-web indicator total">{{totalPics -1}}</span>
      </div>
      <div class="equipe__slider-frame">
        <div class="equipe__slider-img" v-for="pic in gallery" :key="pic.id" :id="pic.id">
          <img :src="pic.source" alt class="equipe__slider-pic" />
          <div class="equipe__slider-infobox">
            <h3 class="equipe__slider-name tk-matrix-ii">{{pic.name}}</h3>
            <p class="equipe__slider-level tk-matrix-ii">{{pic.level}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="equipe__slider-arrows animated fadeInUp">
      <span class="arrow arrow--left" v-on:click="arrowPreviues">
        <i class="fas fa-chevron-left"></i>
      </span>
      <span class="arrow arrow--right" v-on:click="arrowNext">
        <i class="fas fa-chevron-right"></i>
      </span>
    </div>
  </section>
</template>

<script>
import Somos15Mil from "../images/Somos_15_mil";

export default {
  data() {
    return {
      titleColor: "#caa574",
      page: {
        name: "equipe",
        frontTitle: "Nossa gente"
      },
      gallery: [
        {
          id: "img11",
          source: "./src/assets/images/equipe/11-GabrielD.png",
          name: "Gabriel Drummond",
          level: "CEO"
        },
        {
          id: "img1",
          source: "./src/assets/images/equipe/1-Barto.png",
          name: "Bartolomeu Brito",
          level: "Sócio Conselheiro"
        },
        {
          id: "img2",
          source: "./src/assets/images/equipe/2-Luis.png",
          name: "Luiz Sampaio",
          level: "Diretor Administrativo e Financeiro"
        },
        {
          id: "img3",
          source: "./src/assets/images/equipe/3-Carlos.png",
          name: "Carlos Almeida",
          level: "Gerente Administrativo"
        },
        {
          id: "img4",
          source: "./src/assets/images/equipe/4-Gisele.png",
          name: "Gisele Vieira",
          level: "Gerente Jurídica"
        },
        {
          id: "img5",
          source: "./src/assets/images/equipe/5-Mitsu.png",
          name: "Mitsu Gondo",
          level: "Gerente de Projetos e Novos Negócios"
        },
        {
          id: "img6",
          source: "./src/assets/images/equipe/6-Renato.png",
          name: "Renato Portela",
          level: "Gerente Financeiro"
        },
        {
          id: "img7",
          source: "./src/assets/images/equipe/7-Leticia.png",
          name: "Letícia Galvão",
          level: "Gerente de Departamento Pessoal"
        },
        {
          id: "img8",
          source: "./src/assets/images/equipe/8-Amanda.png",
          name: "Amanda Marques",
          level: "Coordenadora de Auditoria Interna"
        },
        {
          id: "img9",
          source: "./src/assets/images/equipe/9-Robson.png",
          name: "Robson Santos",
          level: "Coordenador de Suprimentos"
        },
        {
          id: "img10",
          source: "./src/assets/images/equipe/10-Bianca.png",
          name: "Bianca Gomes",
          level: "Coordenadora Contábil"
        },
        {
          id: "img12",
          source: "./src/assets/images/equipe/11-GabrielD.png",
          name: "Gabriel Drummond",
          level: "CEO"
        }
      ],
      nextPic: 0,
      currentPic: 0,
      previuesPic: 0,
      countPics: 1,
      totalPics: 0
    };
  },
  methods: {
    defaultLayout: function() {
      this.nextPic = 1;
      this.currentPic = 0;
      this.countPics = 1;
      this.totalPics = this.gallery.length;
      let pics = this.gallery;
      for (let i = 0; i < pics.length; i++) {
        if (i == this.currentPic) {
          document.getElementById(pics[i].id).classList.add("current");
        } else if (i == this.nextPic) {
          document.getElementById(pics[i].id).classList.add("next");
        } else {
          document.getElementById(pics[i].id).classList.add("othersPics");
        }
      }
    },
    arrowNext: function() {
      let pics = this.gallery;
      this.nextPic += 1;
      this.currentPic += 1;
      this.previuesPic += 1;
      this.countPics += 1;
      if (this.currentPic >= pics.length - 1) {
        this.defaultLayout();
      }
      for (let i = 0; i < pics.length; i++) {
        document
          .getElementById(pics[i].id)
          .classList.remove("current", "next", "othersPics");
        // document.getElementById(pics[i].id).classList.remove("next");
        // document.getElementById(pics[i].id).classList.remove("othersPics");
        if (i == this.currentPic) {
          document.getElementById(pics[i].id).classList.add("current");
        } else if (i == this.nextPic) {
          document.getElementById(pics[i].id).classList.add("next");
        } else {
          document.getElementById(pics[i].id).classList.add("othersPics");
        }
      }
    },
    arrowPreviues: function() {
      let pics = this.gallery;
      let lengthPics = pics.length;
      this.nextPic -= 1;
      this.currentPic -= 1;
      this.previuesPic -= 1;
      this.countPics -= 1;
      if (this.currentPic == -1) {
        this.nextPic = 0;
        this.currentPic = lengthPics - 2;
        this.previuesPic = lengthPics - 3;
        this.countPics = lengthPics - 1;
        lengthPics = lengthPics - 1;
      }
      for (let i = 0; i < lengthPics; i++) {
        document
          .getElementById(pics[i].id)
          .classList.remove("current", "next", "othersPics");
        // document.getElementById(pics[i].id).classList.remove("next");
        // document.getElementById(pics[i].id).classList.remove("othersPics");
        if (i == this.currentPic) {
          document.getElementById(pics[i].id).classList.add("current");
        } else if (i == this.nextPic) {
          document.getElementById(pics[i].id).classList.add("next");
        } else {
          document.getElementById(pics[i].id).classList.add("othersPics");
        }
      }
    }
  },
  mounted() {
    this.defaultLayout();
    let startY = 0;
    let endY = 0;
    let scrollOffset = 0;
    let screen = document.querySelector("#app");
    screen.addEventListener("touchstart", e => {
      startY = e.changedTouches[0].clientY;
    });
    screen.addEventListener("touchend", e => {
      endY = e.changedTouches[0].clientY;
      scrollOffset = Math.abs(startY - endY);
      startY += 50;
      if (startY > endY) {
        this.titleColor = "#111";
      } else {
        this.titleColor = "#caa574";
      }
    });
    window.addEventListener("wheel", event => {
      let offsetWhellY = event.wheelDeltaY;

      if (offsetWhellY <= 0) {
        this.titleColor = "#111";
      } else {
        this.titleColor = "#caa574";
      }
    });
  },
  created() {
    this.$emit("notHomePage", this.page);
  },
  components: {
    Somos15Mil
  }
};
</script>

<style>
</style>
