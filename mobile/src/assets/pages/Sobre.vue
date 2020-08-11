<template>
  <section id="sobre" class="sobre">
    <nav class="nav" :class="{active:lineAnimation}"></nav>
    <main class="main animated" :class="{active:lineAnimation}">
      <div class="accordion">
        <div class="accordion__item0 animated fadeInDown">
          <a href>
            <h2 class="main__title">Quem somos</h2>
          </a>
          <p class="main__text">
            Acompanhando o crescimento dos nossos negócios, a Drummond Participações foi criada com o objetivo de otimizar os processos executados nas diversas áreas administrativas das empresas do grupo, gerando riqueza e garantindo a
            longevidade através de gerações.
          </p>
        </div>
        <div class="accordion__itens animated fadeIn">
          <div class="accordion__item1">
            <a href v-on:click.prevent="openAccordion">
              <h5 class="accordion__h5">Missão</h5>
            </a>
            <p
              class="accordion__p"
            >Realizar uma gestão eficaz dos investimentos e processos administrativos e identificar oportunidades que criem valor às empresas associadas.</p>
          </div>
          <div class="accordion__item2">
            <a href v-on:click.prevent="openAccordion">
              <h5 class="accordion__h5">Visão</h5>
            </a>
            <p
              class="accordion__p"
            >Contribuir com o crescimento das empresas atendidas e promover a sinergia no grupo econômico com atuação ética profissional e qualidade no atendimento, visando a perpetuidade de suas associadas.</p>
          </div>
          <div class="accordion__item3">
            <a href v-on:click.prevent="openAccordion">
              <h5 class="accordion__h5">Valores</h5>
            </a>
            <div class="accordion__p">
              <ul>
                <li>Ética</li>
                <li>Transparência</li>
                <li>Compromentimento</li>
                <li>Melhoria Contínua</li>
                <li>Meritocracia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
    <aside class="aside" :class="{active:lineAnimation}"></aside>
    <footer class="footer"></footer>
  </section>
</template>


<script>
export default {
  data() {
    return {
      page: {
        name: "sobre",
        frontTitle: "Sobre"
      },
      lineAnimation: false
    };
  },
  created() {
    this.$emit("notHomePage", this.page);
  },
  methods: {
    openAccordion: function(event) {
      var accordions = document.querySelectorAll(".accordion__p");

      var obj =
        event.target.parentElement.parentElement.childNodes[2].classList;
      // document.querySelector(".accordion__p").classList.remove("active");
      if (obj.contains("active")) {
        obj.remove("active");
      } else {
        accordions.forEach(accordion => {
          accordion.classList.remove("active");
        });
        obj.add("active");
      }
    },
    animatePage() {
      document.querySelector(".main").classList.add("scale-down");
    }
  },
  mounted() {
    setTimeout(() => {
      this.animatePage();
    }, 200);
    setTimeout(() => {
      this.lineAnimation = true;
    }, 50);
  }
};
</script>

<style>
</style>
