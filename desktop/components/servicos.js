Vue.component("servicos", {
  template: `
    <div id="servicos" class="conteiner-fluid">

       <div class="row" id="row-servicos">
       <div class="col-8" id="fist-foto-col">
        
            <h3 id="servico-titulo">O que fazemos?</h3>
            <h2 id="servico-subtitulo">Participações Societárias</h2>

            <p style="width: 60%" id="servico-desc"> Participação em sociedades de diversos setores,
            incluindo contact center, financeiro, educação, serviços, tecnologia e imobiliário e desenvolvimento de softwares.</p>
        </div>

           <div class="col-4" id="slider-servicos-content">
                
                <div id="fist-photo" data-title="Assessoria Empresarial" data-description="Assessoria nas áreas financeira, administrativa, folha de pagamento, controladoria/contabilidade, jurídica, pesquisas, suprimentos e compliance através de profissionais com ampla experiência em suas áreas de atuação e da utilização das melhores práticas de mercado."></div>
               
                <div id="second-photo" data-title="Contact Center" data-description="Serviço prestado para nichos específicos de mercado através de um atendimento de excelência com uma variedade de canais que potencializam o desempenho dos recursos humanos com aplicação de soluções tecnológicas e proporcionam a melhor interação entre empresa e consumidor."></div>
              
                <!--<div id="third-photo" data-title="Participações Societárias" data-description=" “Societário” – financeiro, educação, serviços, tecnologia e imobiliário: Participação em sociedades de diversos setores, incluindo contact center e desenvolvimento de softwares."></div>-->
               
                <div id="fourth-photo" data-title="Educação" data-description="Sistema de educação superior a distância credenciado pelas principais redes de ensino do país, nacionais e internacionais, além de gerenciamento de treinamentos de capacitação de equipes e profissionais para o aperfeiçoamento dos serviços prestados."></div>
                
                <div id="fifth-photo" data-title="Trade Marketing" data-description="Equipe de abragência nacional especializada em estratégias de maximização  de proposta de valor do produto ou serviço personalizada de acordo com cada negócio através de pesquisa, monitorias para controle de qualidade e merchandising."></div>
                
                <div id="sixth-photo" data-title="Investimento Imobiliário:" data-description="Aquisição de imóveis com ou sem geração imediata de renda, incluindo terrenos para projetos de desenvolvimento e para projetos Built To Suit, bem como imóveis com contrato vigente de locação."
                data-subtitle="Built to Suit" secondary-data-description="Desenvolvimento e construção de empreendimentos sob medida para atender as necessidades específicas dos clientes por meio de contratos de locação de longo prazo. Empregamos capital próprio para a aquisição e construção do imóvel."></div>

                <div id="nav_slider_servicos">
                <div id="background-setas">
                  <a href="javascript:void(0)" id="prev" v-on:click="servicesNavigate('prev')"><img src="assets/imagens/seta_esquerda.svg" class="setas"></a>
                  <a href="javascript:void(0)" id="prev" v-on:click="servicesNavigate('next')"><img src="assets/imagens/seta_direita.svg" class="setas"></a>
                </div>
                <div id="servicos-text-content">
                     <h3 id="servicos-text-titulo">{{title}}</h3>
                     <p id="servicos-text-descricao">{{description}}</p>                     
                     <p id="servicos-text-subtitulo" class="subtitulo">{{subtitle}}</p>                     
                     <p id="servicos-text-descricao-secundaria">{{secondary}}</p>
                </div>

            </div>

           </div>

        </div>
        <img src="assets/imagens/servicos.svg" id="imagem-servicos" alt="">
    </div>
      `,
  data() {
    return {
      title: "",
      subtitle: "",
      description: "",
      secondary: "",
      services: [
        "#fist-photo",
        "#second-photo",
        //"#third-photo",
        "#fourth-photo",
        "#fifth-photo",
        "#sixth-photo"
      ],
      count: 0,
      delay: false
    };
  },
  methods: {
    servicesNavigate: function (direction) {
      if (this.delay) return;
      this.delay = true;
      setTimeout(() => {
        this.delay = false;
      }, 1000);

      if (direction == "next") {
        //atual
        now = this.count;
        //proxima
        next = now + 1;

        //se next tiver o mesmo tamanho do array acabou os dados e devem voltar para o inicio
        if (next >= this.services.length) {
          next = 0;
        }

        this.count = next;

        elementNow = document.querySelector(this.services[now]);
        elementNext = document.querySelector(this.services[next]);
        elementPostNext = document.querySelector(
          this.services[next + 1 >= this.services.length ? 0 : next + 1]
        );

        console.log("next now " + now);
        console.log("next " + next);

        let tl = new TimelineMax();

        tl.to(elementNow, 1, {
          left: "-400%",
          opacity: 0,
          onComplete: () => {
            elementNow.style.width = "20.8vw";
            elementNow.style.height = "100vh";
            elementNow.style.left = "-3.5%";
            elementNow.style.opacity = "0";
            elementNow.style.top = "21%";
          }
        }).to(
          elementNext,
          1,
          {
            width: "196.5%",
            height: "150%",
            left: "-200%",
            top: "0px",
            opacity: 1,
            onStart: () => {
              this.title = elementNext.getAttribute("data-title");
              this.description = elementNext.getAttribute("data-description");
              if (elementNext.getAttribute('id') == 'sixth-photo') {
                document.getElementById('servicos-text-content').className = 'multiple-content';
                this.secondary = elementNext.getAttribute("secondary-data-description");
                this.subtitle = elementNext.getAttribute("data-subtitle");
              } else {
                document.getElementById('servicos-text-content').className = '';
                this.secondary = '';
                this.subtitle = '';
              }
            }
          },
          "-=1"
        );

        TweenMax.to(elementPostNext, 1, {
          opacity: 0.3
        });
      } else {
        //atual
        now = this.count;
        //anterior
        prev = now - 1 < 0 ? this.services.length - 1 : now - 1;

        this.count = prev;

        elementNow = document.querySelector(this.services[now]);
        elementPrev = document.querySelector(this.services[prev]);
        elementPostPrev = document.querySelector(
          this.services[prev - 1 == -1 ? this.services.length - 1 : prev - 1]
        );

        let tl = new TimelineMax();

        tl.to(elementNow, 1, {
          left: "-3.5%",
          height: "100vh",
          top: "21%",
          opacity: 0.3,
          zIndex: -1,
          onStart: () => {
            elementNow.style.top = "21%";
            TweenMax.to(elementPostPrev, 1, {
              opacity: 0
            }),
              TweenMax.to(elementNow, 0.8, {
                width: "66%"
              });
          }
        }).to(
          elementPrev,
          1,
          {
            width: "196.5%",
            height: "150%",
            left: "-200%",
            top: "0px",
            opacity: 1,
            zIndex: 1,
            onStart: () => {
              this.title = elementPrev.getAttribute("data-title");
              this.description = elementPrev.getAttribute("data-description");
              if (elementPrev.getAttribute('id') == 'sixth-photo') {
                document.getElementById('servicos-text-content').className = 'multiple-content';
                this.secondary = elementPrev.getAttribute("secondary-data-description");
                this.subtitle = elementPrev.getAttribute("data-subtitle");
              } else {
                document.getElementById('servicos-text-content').className = '';
                this.secondary = '';
                this.subtitle = '';
              }
            }
          },
          "-=1"
        );

        TweenMax.to(elementPrev, 1, {
          opacity: 1
        });
      }
    }
  },
  mounted: function () {
    let el = document.querySelector("#fist-photo");
    TweenMax.set(el, {
      width: "65.5vw",
      height: "100vh",
      left: "-200%",
      top: "0px",
      opacity: 1
    });

    this.title = el.getAttribute("data-title");
    this.description = el.getAttribute("data-description");
    this.secondary = el.getAttribute("secondary-data-description");
    this.subtitle = el.getAttribute("data-subtitle");
  }
});
