Vue.component("equipe", {
  template: `
    <div id="equipe">

    <div class="conteiner-fluid conteiner-equipes">
        <div class="row">
            <div class="col-3">
               <div id="text-content">
                   <h3>Nossa gente</h3>
                   <img id="img-somos-15-mil" src="assets/imagens/equipe/Somos_15_mil-desktop.svg">
                   <p style="width: 80%">Pessoas que inspiram confiança, profissionalismo, segurança e lealdade nos processos executados. Tais qualidades refletem a maneira como conduzimos e realizamos os nossos serviços, com muito comprometimento e responsabilidade.</p>
               </div>
               
            </div>

            <div class="col-9" id="coluna-slider">

                <div id="nomes_colaboradores">
                    <h3>{{nome}}</h3><br>
                    <h5 class="subTituloEquipe">{{cargo}}</h5>
                </div>
                 <div id="slider-content">
                     <ul>
                        <li><img id="foto1" data-nome="Gabriel Drummond" data-cargo="CEO" src="assets/imagens/equipe/GabrielD.png"></li>

                        <li><img id="foto2" data-nome="Bartolomeu Brito" data-cargo="Sócio Conselheiro" class="fotos" src="assets/imagens/equipe/Barto.png"></li>

                        <li><img id="foto3" data-nome="Luiz Sampaio" data-cargo="Diretor Administrativo e Financeiro" class="fotos" src="assets/imagens/equipe/Luis.png"></li>

                        <li><img id="foto4" data-nome="Carlos Almeida" data-cargo="Gerente Administrativo" class="fotos" src="assets/imagens/equipe/Carlos.png"></li>

                        <li><img id="foto5" data-nome="Gisele Vieira" data-cargo="Gerente Jurídica" class="fotos" src="assets/imagens/equipe/Gisele.png"></li>

                        <li><img id="foto6" data-nome="Mitsu Gondo" data-cargo="Gerente de Projetos e Novos Negócios" class="fotos" src="assets/imagens/equipe/Mitsu.png"></li>

                        <li><img id="foto7" data-nome="Renato Portela" data-cargo="Gerente Financeiro" class="fotos" src="assets/imagens/equipe/Renato.png"></li>

                        <li><img id="foto8" data-nome="Letícia Galvão" data-cargo="Gerente de Departamento Pessoal" class="fotos" src="assets/imagens/equipe/Leticia.png"></li>

                        <li><img id="foto9" data-nome="Amanda Marques" data-cargo="Coordenadora de Auditoria Interna" class="fotos" src="assets/imagens/equipe/Amanda.png"></li>

                        <li><img id="foto10" data-nome="Robson Santos" data-cargo="Coordenador de Suprimentos" class="fotos" src="assets/imagens/equipe/Robson.png"></li>

                        <li><img id="foto11" data-nome="Bianca Gomes" data-cargo="Coordenadora Contábil" class="fotos" src="assets/imagens/equipe/Bianca.png"></li>
                     </ul>
                 </div>

                 <div id="nav_slider">
                    <div id="background-setas">
                      <a href="javascript:void(0)" v-on:click="prevSlider"><img src="assets/imagens/seta_esquerda.svg" class="setas"></a>
                      <a href="javascript:void(0)" v-on:click="nextSlider"><img src="assets/imagens/seta_direita.svg" class="setas"></a>
                    </div>
                </div>

                 <div id="fotos-contador">
                     <span>{{count}}/{{totalFotos}}</span>
                </div>

            </div>
        </div>

    </div>

 </div>
    `,
  data() {
    return {
      fotos: null,
      fotoAtual: 0,
      proximaFoto: 0,
      nome: "Nome Pessoa",
      cargo: "Cargo",
      totalFotos: 0,
      count: 0,
      tempProximafoto: 0
    };
  },
  methods: {
    init: function() {
      this.fotoAtual = 0;
      this.proximaFoto = 1;
      this.fotoPassada = null;
      this.fotos = $("#slider-content ul li img");
      fotos = this.fotos;
      zIndex = 99;
      this.nome = $(this.fotos[0]).attr("data-nome");
      this.cargo = $(this.fotos[0]).attr("data-cargo");
      this.totalFotos = this.fotos.length;
      this.count = 1;
      for (i = 0; i < this.fotos.length; i++) {
        if (i != 0) {
          $("#" + this.fotos[i].id).css("z-index", zIndex);
          $("#" + this.fotos[i].id).attr("data-ordenamento", zIndex);
          //PRIMEIRA FOTO DA FILA
          if (i != 1) {
            $("#" + this.fotos[i].id).css("opacity", "0");
            $("#" + this.fotos[i].id).css("display", "none");
          }
        } else {
          //FOTO PRINCIPAL NA TELA
          $("#" + this.fotos[i].id).attr("data-ordenamento", 100);
          $("#" + this.fotos[i].id).css("z-index", 100);
        }
        zIndex -= 1;
      }
    },
    nextSlider: function() {
      //elemento foto atual
      var fAtual = this.fotos[this.fotoAtual];

      //elemento proxima foto
      var pFoto = this.fotos[this.proximaFoto];

      //a foto atual passa a ser a proxima foto
      this.fotoAtual = this.proximaFoto;

      //INCREMENTA MAIS 1 para pegar a proxima foto em espera
      this.proximaFoto += 1;

      //ZERA O CONTADOR DAS FOTOS
      if (this.proximaFoto == this.fotos.length) {
        this.proximaFoto = 0;
      }

      //ELEMENTO DA PROXIMA FOTO PARA APLICAR O EFEITO
      var ppFoto = this.fotos[this.proximaFoto];

      var tl = new TimelineMax();
      var contTemp = 0;
      tl.to(fAtual, 1, {
        top: "-30%",
        opacity: 0,
        onComplete: () => {
          zIndexOriginal = $("#" + fAtual.id).attr("data-ordenamento");
          $("#" + fAtual.id).css("z-index", zIndexOriginal);

          // $("#"+fAtual.id).css("top","0");
          // $("#"+fAtual.id).css("left","16%");

          if (this.count == this.fotos.length) {
            this.count = 0;
          }
          this.count += 1;
          TweenMax.set(fAtual, {
            y: 0,
            x: 0,
            opacity: 0
          });
        }
      })
        .to(
          pFoto,
          1,
          {
            top: "-14%",
            left: "-0.1%",
            opacity: 1,
            onStart: () => {
              this.nome = $(pFoto).attr("data-nome");
              this.cargo = $(pFoto).attr("data-cargo");
              $(pFoto).css("z-index", 100);
            },
            onComplete: () => {}
          },
          "-=1"
        )
        .to(
          ppFoto,
          1,
          {
            onStart: () => {
              $(ppFoto).css("display", "block");
              $("#" + ppFoto.id).css("top", "0");
              $("#" + ppFoto.id).css("left", "16%");
            },
            opacity: 0.5
          },
          "-=1"
        );
    },
    prevSlider: function() {
      try {
        if (this.count == 1) {
          return;
        }

        var fAnterior = null;
        var fAtual = null;
        var tl = new TimelineMax();
        var ppFoto = null;

        fAnterior = this.fotos[this.fotoAtual - 1];
        fAtual = this.fotos[this.fotoAtual];
        this.fotoAtual = this.fotoAtual - 1;

        if (this.proximaFoto <= 0) {
          ppFoto = this.fotos[0];
        } else {
          ppFoto = this.fotos[this.proximaFoto];
        }

        this.proximaFoto =
          this.proximaFoto <= 0 ? this.fotos.length - 1 : this.proximaFoto - 1;

        tl.to(fAnterior, 1, {
          top: "-14%",
          left: "-0.1%",
          opacity: 1,
          onStart: () => {
            this.nome = $(fAnterior).attr("data-nome");
            this.cargo = $(fAnterior).attr("data-cargo");
            $(fAnterior).css("z-index", 100);
            this.count -= 1;
          }
        })
          .to(
            fAtual,
            1,
            {
              top: "0%",
              left: "16%",
              opacity: 0.5,
              onStart: () => {
                zIndexOriginal = $("#" + fAtual.id).attr("data-ordenamento");
                $("#" + fAtual.id).css("z-index", zIndexOriginal);
              },
              onComplete: function() {}
            },
            "-=1"
          )
          .to(
            ppFoto,
            1,
            {
              opacity: 0
            },
            "-=1"
          );
      } catch (e) {
        console.log(e);
      }
    }
  },
  mounted: function() {
    this.init();
  }
});
