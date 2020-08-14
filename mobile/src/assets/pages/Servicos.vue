<template>
    <section id="servicos" class="servicos is-page">
    <h1 class="page__title animated fadeInDown">{{page.frontTitle}}</h1>

    <p class="titulo animated fadeInDown">{{page.title}}</p>  
    <p class="titulo-desc animated fadeInDown">{{page.desc}}</p>
    
    <div class="servicos__slider animated fadeIn slow">
      <div class="servicos__slider-img" v-for="img in gallery" :key="img.id" :id="img.id">
        <h3 class="servicos__slider-title tk-matrix-ii">{{img.title}}</h3>
        <div class="servicos__slider-extra">
          <img :src="img.source" alt v-bind:class="hasMultipleText(true)" />
          <div class="servicos__slider-arrows">
            <span class="arrow arrow--left" v-on:click="arrowPreviues">
              <i class="fas fa-chevron-left"></i>
            </span>
            <span class="arrow arrow--right" v-on:click="arrowNext">
              <i class="fas fa-chevron-right"></i>
            </span>
          </div>
        </div>
        <div v-bind:class="hasMultipleText(false)">
          <p>{{img.text}}</p>
          <template v-if="gallery[currentService].id == 'img5'">
            <h3 class="servicos__slider-subtitle">{{img.subtitle}}</h3>
            <p class="servicos__slider-secondary-text">{{img.secondaryText}}</p>
          </template>
          
        </div>
      </div>
    </div>
    <!-- <div class="servicos__slider-arrows">
      <span class="arrow arrow--left" v-on:click="arrowPreviues">
        <i class="fas fa-chevron-left"></i>
      </span>
      <span class="arrow arrow--right" v-on:click="arrowNext">
        <i class="fas fa-chevron-right"></i>
      </span>
    </div>-->
  </section>
</template>

<script>
export default {
  data() {
    return {
       page: {
        name: "servicos",
        frontTitle: "O que fazemos",
        title: "Participações Societárias",
        desc:
            "Participação em sociedades de diversos setores,incluindo contact center, financeiro, educação, serviços, tecnologia e imobiliário e desenvolvimento de softwares."
      },
      gallery: [
        {
          id: "img2",
          source: "./src/assets/images/servicos/02.png",
          title: "Assessoria Empresarial",
          text:
            "Assessoria nas áreas financeira, administrativa, folha de pagamento, controladoria/contabilidade, jurídica, pesquisas, suprimentos e compliance através de profissionais com ampla experiência em suas áreas de atuação e da utilização das melhores práticas de mercado."
        },
        {
          id: "img1",
          source: "./src/assets/images/servicos/01.png",
          title: "Contact Center",
          text:
            "Serviço prestado para nichos específicos de mercado através de um atendimento de excelência com uma variedade de canais que potencializam o desempenho dos recursos humanos com aplicação de soluções tecnológicas e proporcionam a melhor interação entre empresa e consumidor."
        },
        // {
        //   id: "img3",
        //   source: "./src/assets/images/servicos/03.png",
        //   title: "Participações Societárias",
        //   text:
        //     "  Participação em sociedades de diversos setores, incluindo contact center e desenvolvimento de softwares."
        // },
        {
          id: "img4",
          source: "./src/assets/images/servicos/04.jpg",
          title: "Trade Marketing",
          text:
            "Equipe de abragência nacional especializada em estratégias de maximização  de proposta de valor do produto ou serviço personalizada de acordo com cada negócio através de pesquisa, monitorias para controle de qualidade e merchandising."
        },
        {
          id: "img5",
          source: "./src/assets/images/servicos/05.jpg",
          title: "Investimento imobiliário",
          text:
            "Aquisição de imóveis com ou sem geração imediata de renda, incluindo terrenos para projetos de desenvolvimento e para projetos Built To Suit, bem como imóveis com contrato vigente de locação.",
          subtitle: 'Built to Suit',
          secondaryText: 
            "Desenvolvimento e construção de empreendimentos sob medida para atender as necessidades específicas dos clientes por meio de contratos de locação de longo prazo. Empregamos capital próprio para a aquisição e construção do imóvel."
        },
        {
          id: "img6",
          source: "./src/assets/images/servicos/06.jpg",
          title: "Educação",
          text:
            "Sistema de educação superior a distância credenciado pelas principais redes de ensino do país, nacionais e internacionais, além de gerenciamento de treinamentos de capacitação de equipes e profissionais para o aperfeiçoamento dos serviços prestados."
        },
        {
          id: "img7",
          source: "./src/assets/images/servicos/02.png",
          title: "Assessoria Empresarial",
          text:
            "Assessoria nas áreas financeira, administrativa, folha de pagamento, controladoria/contabilidade, jurídica, pesquisas, suprimentos e compliance através de profissionais com ampla experiência em suas áreas de atuação e da utilização das melhores práticas de mercado."
        }
      ],
      currentService: 0,
      nextService: 0,
      previuesService: 0,
      countService: 0
    };
  },
  methods: {
    hasMultipleText(isPicture) {            
        if(this.gallery[this.currentService].id == 'img5') {
          if(isPicture) {
            return 'servicos__slider-pic no-shadow-pic';
          } else {           
            return 'servicos__slider-text-multiple';
          }
        } else {
          if(isPicture) {
            return 'servicos__slider-pic';
          } else {           
            return 'servicos__slider-text';
          }
        }
    },
    defaultLayout: function() {
      this.currentService = 0;
      this.nextService = 1;
      this.previuesService = 0;
      let services = this.gallery;
      for (let i = 0; i < services.length; i++) {
        if (i == this.currentService) {
          document.getElementById(services[i].id).classList.add("current");
        } else if (i == this.nextService) {
          document.getElementById(services[i].id).classList.add("next");
        } else {
          document.getElementById(services[i].id).classList.add("others");
        }
      }
    },
    arrowNext: function() {
      this.currentService += 1;
      this.nextService += 1;
      this.previuesService += 1;
      let services = this.gallery;
      if (this.currentService >= services.length - 1) {
        this.defaultLayout();
      }
      for (let i = 0; i < services.length; i++) {
        document
          .getElementById(services[i].id)
          .classList.remove("current", "next", "others");
        // document.getElementById(services[i].id).classList.remove("next");
        // document.getElementById(services[i].id).classList.remove("others");
        if (i == this.currentService) {
          document.getElementById(services[i].id).classList.add("current");
        } else if (i == this.nextService) {
          document.getElementById(services[i].id).classList.add("next");
        } else {
          document.getElementById(services[i].id).classList.add("others");
        }
      }
    },
    arrowPreviues: function() {
      this.currentService -= 1;
      this.nextService -= 1;
      this.previuesService -= 1;
      let services = this.gallery;
      let lengthServices = services.length;
      if (this.currentService == -1) {
        this.nextService = 0;
        this.currentService = lengthServices - 2;
        this.previuesService = lengthServices - 3;
        lengthServices = lengthServices - 1;
      }
      for (let i = 0; i < services.length; i++) {
        document
          .getElementById(services[i].id)
          .classList.remove("current", "next", "others");
        // document.getElementById(services[i].id).classList.remove("next");
        // document.getElementById(services[i].id).classList.remove("others");
        if (i == this.currentService) {
          document.getElementById(services[i].id).classList.add("current");
        } else if (i == this.nextService) {
          document.getElementById(services[i].id).classList.add("next");
        } else {
          document.getElementById(services[i].id).classList.add("others");
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
        this.titleColor = "#000";        
        this.subtitleColor = "#000";
      } else {
        this.titleColor = "#caa574";        
        this.subtitleColor = "#fff";
      }

      // console.log(startY);
      // console.log(endY);
    });
    window.addEventListener("wheel", event => {
      let offsetWhellY = event.wheelDeltaY;

      if (offsetWhellY < 0) {
        this.titleColor = "#000";
        this.subtitleColor = "#000";
      } else {
        this.titleColor = "#caa574";        
        this.subtitleColor = "#fff";
      }
    });
  },
  created() {
    this.$emit("notHomePage", this.page);
  }
};
</script>

<style>
</style>
