Vue.component("navegacao",{
    template:`
    <!--component-menu-->
    <div id="menu" class="conteiner-fluid">

       <div class="row" v-if="trocarMenu == 0" id="menu-conteiner-inicio">

           <div class="col-1">
                <div id="nav_indicador"></div>
            </div>
            <div class="col-11">
               <ul id="nav-content">
                  <li><a style="color:#FFFFFF;" href="javascript:void(0)" v-on:click="navigate('inicio',1)">Início</a></li>
                  <li><a href="javascript:void(0)" v-on:click="navigate('sobre', 2)">Sobre</a></li>
                  <li><a href="javascript:void(0)" v-on:click="navigate('equipe',3)">Equipe</a></li>
                  <li><a href="javascript:void(0)" v-on:click="navigate('servicos',4)">Serviços</a></li>
                  <li id="contato-link"><a href="javascript:void(0)" v-on:click="navigate('contato',5)">Contato</a></li>
                </ul>
            </div>

        </div>

        <div class="conteiner-fluid" v-else id="menu-contato">
           <ul>
               <li><a href="javascript:void(0)" v-on:click="navigate('inicio',1)">Inicio</a></li>
               <li><a href="javascript:void(0)" v-on:click="navigate('sobre', 2)">Sobre</a></li>
               <li><a href="javascript:void(0)" v-on:click="navigate('equipe',3)">Equipe</a></li>
               <li><a href="javascript:void(0)" v-on:click="navigate('servicos',1)">Serviços</a></li>
           </ul>
        </div>
        <div>
           <mouse style="">
           </mouse>
        </div>




    </div>
    `,
    data(){
        return{
            ordensSection:[1,2,3,4,5],
            SectionAnimationFunction:[
                this.animacaoInicio,
                this.animacaoSobre,
                this.animacaoEquipe,
                this.animacaoServicos,
                this.animacaoContato
            ],
            sectionAtual:"inicio",
            sectionProxima:"",
            distancia:"",
            exec_contato:false,
            ordem:1,
            ordemAnterior:0
        }
    },
    props:["trocarMenu"],
    methods:
    {
        
        navigate(section,ordem)
        {
           
           this.ordemAnterior = this.ordem;
           this.ordem = ordem;

            calcOrdem = (this.ordem-this.ordemAnterior) <= 0 ? (this.ordem-this.ordemAnterior) *-1 : (this.ordem-this.ordemAnterior);
            $('#nav-content li a').css({'color':'rgba(255,255,255, 0.5)'});
            $('#nav-content li a').eq(this.ordem - 1).css({'color':'#FFFFFF'});
           if(this.ordem < this.ordemAnterior)
           {
              calcPrev = this.ordemAnterior - this.ordem;

              this.backMenu(calcPrev);
           }
           else
           {
             calcPrev = this.ordemAnterior - this.ordem;

             this.goMenu(calcPrev);
           }


        },
        backMenu:function(calcPrev)
        {
             let ordemAnterior = this.ordemAnterior;

             let funcs =
             {
               1:{'method':'animacaoInicio','distancia':0,'section':'inicio'},
               2:{'method':'animacaoSobre','distancia':200,'section':'sobre'},
               3:{'method':'animacaoEquipe','distancia':400,'section':'equipe'},
               4:{'method':'animacaoServicos','distancia':600,'section':'servicos'},
               5:{'method':'animacaoContato','distancia':800,'section':'contato'},
             };

             let c = ordemAnterior - calcPrev;

             do
             {
               this[funcs[ordemAnterior - 1].method]();
               this.distancia = funcs[ordemAnterior - 1].distancia;
               this.sectionAtual =  funcs[ordemAnterior - 1].section;
               ordemAnterior--;
             }while(ordemAnterior > c);

        },
        goMenu:function(calcPrev)
        {
             let ordemAnterior = this.ordemAnterior;

             let funcs =
             {
               1:{'method':'animacaoInicio','distancia':0,'section':'inicio'},
               2:{'method':'animacaoSobre','distancia':200,'section':'sobre'},
               3:{'method':'animacaoEquipe','distancia':400,'section':'equipe'},
               4:{'method':'animacaoServicos','distancia':600,'section':'servicos'},
               5:{'method':'animacaoContato','distancia':800,'section':'contato'},
             };

             let c = ordemAnterior - calcPrev;

             do
             {
               this[funcs[ordemAnterior + 1].method]();
               this.distancia = funcs[ordemAnterior + 1].distancia;
               this.sectionAtual =  funcs[ordemAnterior + 1].section;
               ordemAnterior++;
             }while(ordemAnterior < c);

        },
        animacaoInicio:function()
        {
           var tl = new TimelineMax()
           var bg = document.getElementById("background");
           var linha = document.getElementById("linha_externa");
           var menuBottom = document.getElementById("menu-empresas");
           var logoLinha = document.getElementById("logo_linha");
           var logoPreenchida = document.getElementById("logo_preenchida");
           var quemsomosContent = document.getElementById("quemsomos_content");
           var valoresContent = document.getElementById("valores_content");
           var nav_indicador = document.getElementById("nav_indicador");
           var linha_mouse_1 = document.getElementById("linha_mouse_1");
           var linha_mouse_2 = document.getElementById("linha_mouse_2");
           var linha_mouse_3 = document.getElementById("linha_mouse_3");
           var linha_sobre_1 = document.getElementById("linha_sobre_1");
           var linha_sobre_2 = document.getElementById("linha_sobre_2");
           var linha_sobre_3 = document.getElementById("linha_sobre_3");

           //analisa resolucao do usuario
            
           if(screen.availWidth >= 1536){
               TweenMax.to(nav_indicador,1,{
                   width: "211%"
               })
           }else if(screen.availWidth >= 1280 && screen.availWidth <= 1368 ){
               TweenMax.to(nav_indicador,1,{
                   width: "228%"
               })
           }

           tl.to(bg,1,{
               scale:1
           }).to(linha,1,{
               scale:0,
               transformOrigin:"top left"
           },"-=1").to(menuBottom,1,{
               opacity:1
           },"-=1").to(logoLinha,1,{
               x:0,
               y:0
           },"-=1").to(logoPreenchida,1,{
               y:0,
               opacity:1
           },"-=1").to(quemsomosContent,1,{
               y:-100,
               x:-50,
               opacity:0
           },"-=1").to(valoresContent,1,{
               y:300,
               opacity:0,
               onComplete:function(){
                 $("#sobre").css("display","none");
               }
            },"-=1").to(linha_sobre_1,1,{
                y:0,
                opacity: 0,
                transformOrigin:"top"
            },"-=1").to(linha_sobre_2,1,{
                y:0,
                opacity: 0,
                transformOrigin:"top"
            },"-=1").to(linha_sobre_3,1,{
                y:0,
                opacity: 0.5,
                transformOrigin:"top"
            },"-=1").to(linha_mouse_1,1,{
                height: "68.5vh"
            },"-=1").to(linha_mouse_2,1,{
                height: "7vh"
            },"-=1").to(linha_mouse_3,1,{
                height: "5.3vh"
            },"-=1");
        },
        animacaoSobre:function(){
           var tl = new TimelineMax()
           var bg = document.getElementById("background");
           var linha = document.getElementById("linha_externa");
           var menuBottom = document.getElementById("menu-empresas");
           var logoLinha = document.getElementById("logo_linha");
           var logoPreenchida = document.getElementById("logo_preenchida");
           var quemsomosContent = document.getElementById("quemsomos_content");
           var valoresContent = document.getElementById("valores_content");
           var boxMovel = document.getElementById("bloco-movel");
           var textContent = document.getElementById("text-content");
           var ColunaSlider = document.getElementById("coluna-slider");
           var nav_indicador = document.getElementById("nav_indicador");
           var linha_mouse_1 = document.getElementById("linha_mouse_1");
           var linha_mouse_2 = document.getElementById("linha_mouse_2");
           var linha_mouse_3 = document.getElementById("linha_mouse_3");
           var linha_mouse_4 = document.getElementById("linha_mouse_4");
           var linha_sobre_1 = document.getElementById("linha_sobre_1");
           var linha_sobre_2 = document.getElementById("linha_sobre_2");
           var linha_sobre_3 = document.getElementById("linha_sobre_3");

           //PARAMETROS ANIMACAOES
           var alturaLogoPreenchida = 0;
           var alturaValoresQuemSomos = 0;

           if(screen.availWidth >= 1536){
               TweenMax.to(nav_indicador,1,{
                   width: "347%"
               })

               alturaLogoPreenchida = -350;
           }else if(screen.availWidth >= 1280 && screen.availWidth <=1366 ){
               TweenMax.to(nav_indicador,1,{
                   width: "371%"
               })
               alturaLogoPreenchida = -250;
           }

           tl.to(bg,1,{
               scale:0.7,
               opacity:1
           }).to(linha,1,{
               scale:0.85,
               transformOrigin:"top left"
           },"-=1").to(menuBottom,1,{
               opacity:0
           },"-=1").to(logoLinha,1,{
               x:700,
               y:-150,
               opacity:1
           },"-=1").to(linha_sobre_1,1,{
                y:-198,
                opacity: 0.5,
                transformOrigin:"bottom"
            },"-=1").to(linha_sobre_2,1,{
                y:-178,
                opacity: 0.5,
                transformOrigin:"bottom"
            },"-=1").to(linha_sobre_3,1,{
                y:-191,
                opacity: 0.5,
                transformOrigin:"bottom"
            },"-=1").to(linha_mouse_1,1,{
               height: "5.3vh"
           },"-=1").to(linha_mouse_2,1,{
               height: "68.5vh"
           },"-=1").to(linha_mouse_3,1,{
               height: "7vh"
           },"-=1").to(linha_mouse_4,1,{
               height: "5.3vh"
            },"-=1").to(logoPreenchida,1,{
               y:alturaLogoPreenchida,
               opacity:0
           },"-=1").to(quemsomosContent,1,{
               onStart:()=>{
                   $("#sobre").css("display","block");
               },
               y:0,
               x:0,
               opacity:1
           },"-=1").to(valoresContent,1,{
               y:0,
               opacity:1
           },"-=1").to(boxMovel,1,{
               top:"60%",
               height:"40%"
           },"-=1").to(textContent,1,{
               x:-500
           },"-=1").to(ColunaSlider,1,{
               opacity:0,
               onComplete:function(){
                   $("#equipe").css("display","none");
               }
           },"-=1");
           $("#servicos").css("display","none");
        },

        animacaoEquipe:function()
        {
           var tl = new TimelineMax()
           var bg = document.getElementById("background");
           var linha = document.getElementById("linha_externa");
           var logoLinha = document.getElementById("logo_linha");
           var quemsomosContent = document.getElementById("quemsomos_content");
           var valoresContent = document.getElementById("valores_content");
           var boxMovel = document.getElementById("bloco-movel");
           var textContent = document.getElementById("text-content");
           var ColunaSlider = document.getElementById("coluna-slider");
           var nav_indicador = document.getElementById("nav_indicador");
           var linha_mouse_2 = document.getElementById("linha_mouse_2");
           var linha_mouse_3 = document.getElementById("linha_mouse_3");
           var linha_mouse_4 = document.getElementById("linha_mouse_4");
           var linha_mouse_5 = document.getElementById("linha_mouse_5");

           var servicos = document.getElementById("servicos")
           var background = document.getElementById("bloco-movel");
           var ServicoTitulo = document.getElementById("servico-titulo");
           var ServicoTextTitulo = document.getElementById("servicos-text-titulo");
           var ServicoTextDescricao = document.getElementById("servicos-text-descricao")

           if(screen.availWidth >= 1536){
               TweenMax.to(nav_indicador,1,{
                   width: "490%"
               })
           }else if(screen.availWidth >= 1280 && screen.availWidth <=1366){
               TweenMax.to(nav_indicador,1,{
                   width: "530%"
               })
           }

           $("#equipe").css("display","block");

           tl.to(boxMovel,1,{
               top:"0%",
               height:"70%",
               onStart:function(){
                   $("#linha_externa").css("display","block");
               }
           }).to(linha,1,{
               scale:1.1,
               transformOrigin:"top left"
           },"-=1").to([bg,quemsomosContent,logoLinha],1,{
               opacity:0
           },"-=1").to(valoresContent,1,{
               y:300,
               opacity:0
           },"-=1").to(textContent,1,{
               x:0
           },"-=1").to(ColunaSlider,1,{
               opacity:1
           },"-=1").to(background,1,{
               height:"70%",
               top:"0"
           },"-=1").to(linha_sobre_1,1,{
                y:0,
                opacity: 0,
                transformOrigin:"top"
            },"-=1").to(linha_sobre_2,1,{
                y:0,
                opacity: 0,
                transformOrigin:"top"
            },"-=1").to(linha_sobre_3,1,{
                y:0,
                opacity: 0.5,
                transformOrigin:"top"
            },"-=1").to(ServicoTitulo,1,{
               marginLeft:"40%"
           },"-=1").to(linha_mouse_2,1,{
               height: "5.3vh"
           },"-=1").to(linha_mouse_3,1,{
               height: "68.5vh"
           },"-=1").to(linha_mouse_4,1,{
               height: "7vh"
           },"-=1").to(linha_mouse_5,1,{
               height: "5.3vh"
           },"-=1").to(servicos,1,{
               opacity:0,
               onComplete:function(){
                   $("#servicos").css("display","none");
               }
           },"-=1").to(ServicoTextTitulo,1,{
               marginLeft:"81%"
           },"-=1").to(ServicoTextDescricao,1,{
               marginLeft:"122%"
           },"-=1");;
        },
        animacaoServicos:function()
        {

           var nav_indicador = document.getElementById("nav_indicador");

           if(screen.availWidth >= 1536){
               TweenMax.to(nav_indicador,1,{
                   width: "650%"
               })
           }else if(screen.availWidth >= 1280 && screen.availWidth <=1366 ){
               TweenMax.to(nav_indicador,1,{
                   width: "702%"
               })

           }

           var tl = new TimelineMax();

           var servicos = document.getElementById("servicos");
           var background = document.getElementById("bloco-movel");
           var textContent = document.getElementById("text-content");
           var ColunaSlider = document.getElementById("coluna-slider");
           var ServicoTitulo = document.getElementById("servico-titulo");

           var ServicosTextContent = document.getElementById("servicos-text-content");
           var Servicos = document.getElementById("servicos");
           var Contato = document.getElementById("contato");
           var Menu = document.getElementById("menu");
           var BlocoMovel = document.getElementById("bloco-movel");
           var LinhaExternaContato = document.getElementById("linha-externa-contato");

           var BtnMap = document.getElementById("btn-mapa");
           var NavContent = document.getElementById("nav-content");
           var ContatoLink = document.getElementById("contato-link");

           var linha_mouse_3 = document.getElementById("linha_mouse_3");
           var linha_mouse_4 = document.getElementById("linha_mouse_4");
           var linha_mouse_5 = document.getElementById("linha_mouse_5");

           var ServicoTextTitulo = document.getElementById("servicos-text-titulo");

           var ServicoTextDescricao = document.getElementById("servicos-text-descricao");

          //CONFIGURACOES DE ALGUNS ELEMENTOS
          $("#"+ServicoTitulo.id).css("margin-left","40%");
          $("#"+ServicoTextTitulo.id).css("margin-left","40%");
          $("#"+ServicoTextDescricao.id).css("margin-left","122%");
          $("#servicos").css("display","block");

          var linha_externa = document.getElementById("linha_externa");

           //CASO CONTATO TENHA EXECUTADO SETA COMO FALSO E RETORNA O PADRAO
           if(this.exec_contato){
               this.exec_contato = false
           }

           tl.to(textContent,1,{
               x:-500
           }).to(ColunaSlider,1,{
               opacity:0
           },"-=1").to(background,1,{
               top: "21%",
               height:"80%",
               onComplete:function(){
                   $("#equipe").css("display","none");
               }
           },"-=1").to(linha_externa,1,{
               onComplete:function(){
                   $("#linha_externa").css("display","none");
               }
           },"-=1").to(servicos,1,{
                opacity:1,
                onComplete:function(){

                }
           },"-=1").to(ServicoTitulo,1,{
               marginLeft:"15%"
           },"-=1").to(ServicoTextTitulo,1,{
               marginLeft:"-26%"
           },"-=1").to(ServicoTextDescricao,1,{
               marginLeft:"67%"
           },"-=1").to(Servicos,1,{
               opacity:1,
           },"-=1").to(Contato,1,{
                opacity:0,
                onComplete:function(){
                    Contato.style.display ="none";
                }
           },"-=1").to(Menu,1,{
               opacity:1
           },"-=1").to(BlocoMovel,1,{
               opacity:1
           },"-=1").to(LinhaExternaContato,1,{
                scale:0,
                transformOrigin:"botton top"
           },"-=1").to(BtnMap,1,{
                x:-200
           },"-=1").to(NavContent,1,{
               onStart:function(){
                   ContatoLink.style.display = "";
               },
               top:"0",
               left:"0%"
           },"-=1").to(nav_indicador,1,{
               x:0,
               opacity:1
           },"-=1").to(linha_sobre_1,1,{
                y:0,
                opacity: 0,
                transformOrigin:"top"
            },"-=1").to(linha_sobre_2,1,{
                y:0,
                opacity: 0,
                transformOrigin:"top"
            },"-=1").to(linha_sobre_3,1,{
                y:0,
                opacity: 0.5,
                transformOrigin:"top"
            },"-=1").to(ServicosTextContent,1,{
               marginLeft:"0"
            },"-=1").to(linha_mouse_3,1,{
              height: "5.3vh"
            },"-=1").to(linha_mouse_4,1,{
                height: "68.5vh"
            },"-=1").to(linha_mouse_5,1,{
                height: "7vh"
            },"-=1");



       },
       animacaoContato:function(){

           var servicoTitulo = document.getElementById("servico-titulo");
           var ServicosTextContent = document.getElementById("servicos-text-content");
           var Servicos = document.getElementById("servicos");
           var Contato = document.getElementById("contato");
           var Menu = document.getElementById("menu");
           var BlocoMovel = document.getElementById("bloco-movel");
           var LinhaExternaContato = document.getElementById("linha-externa-contato");
           var BtnMap = document.getElementById("btn-mapa");
           Contato.style.display = "block";
           LinhaExternaContato.style.transform = "scale(0)";
           var Linha_externa = document.getElementById("linha_externa");
           var NavContent = document.getElementById("nav-content");
           var ContatoLink = document.getElementById("contato-link");
           var nav_indicador = document.getElementById("nav_indicador");
           var linha_mouse_3 = document.getElementById("linha_mouse_3");
           var linha_mouse_4 = document.getElementById("linha_mouse_4");
           var linha_mouse_5 = document.getElementById("linha_mouse_5");

           TweenMax.set(BtnMap,{
               x:-200
           })

           this.exec_contato = true;

           var tl = new TimelineMax();
           tl.to(servicoTitulo,1,{
               marginLeft:"5%"
           }).to(ServicosTextContent,1,{
               marginLeft:"50%"
           },"-=1").to(Servicos,1,{
               opacity:0,
           },"-=1").to(Contato,1,{
                opacity:1
           },"-=1").to(Menu,1,{

           },"-=1").to(BlocoMovel,1,{
               opacity:0
           },"-=1").to(LinhaExternaContato,1,{
                scale:0.5,
                transformOrigin:"botton top"
           },"-=1").to(BtnMap,1,{
                x:0
           },"-=1").to(NavContent,1,{
               onStart:function(){
                   ContatoLink.style.display = "none";
               },
               top:"708%",
               left:"130px"
           },"-=1").to(Linha_externa,1,{
            onStart:function(){
                Linha_externa.style.display = "none";
            },
        },"-=1").to(linha_mouse_3,1,{
               height: "5.3vh"
           },"-=1").to(linha_sobre_1,1,{
                y:0,
                opacity: 0,
                transformOrigin:"top"
            },"-=1").to(linha_sobre_2,1,{
                y:0,
                opacity: 0,
                transformOrigin:"top"
            },"-=1").to(linha_sobre_3,1,{
                y:0,
                opacity: 0.5,
                transformOrigin:"top"
            },"-=1").to(linha_mouse_4,1,{
               height: "5.3vh"
           },"-=1").to(linha_mouse_5,1,{
               height: "68.5vh"
           },"-=1").to(nav_indicador,1,{
               x:-300,
               opacity:0
           },"-=1");

       },
       startLoading:function(abrir){
           var loadingBox = document.querySelectorAll(".loading-box");
           var carregandoTexto = document.getElementById("carregandoTexto");
           var linhaLoading = document.getElementById("linha-loading");
           var LoginContent = document.getElementById("loading-content");

           TweenMax.set(carregandoTexto,{
               x:-500
           });


        if(abrir == true){
           TweenMax.set(LoginContent,{
               display:"block"
           });

           var tl = new TimelineMax();
           tl.to(loadingBox[0],1,{
               scale:1,
               transformOrigin:"right center "
           }).to(loadingBox[1],1,{
                   scale:1,
                   transformOrigin:"left center "
           },"-=1").to(carregandoTexto,1,{
               x:0
           },"-=0.3").to(linhaLoading,1,{
               repeat:-1,
               width:"60%",
               yoyo:true
           },"-=1")
         }else{



           var tl = new TimelineMax();
           tl.to(loadingBox[0],1,{
               scale:0,
               transformOrigin:"right center "
           }).to(loadingBox[1],1,{
                   scale:0,
                   transformOrigin:"left center "
           },"-=1").to(carregandoTexto,1,{
               x:0
           },"-=0.3").to(linhaLoading,1,{
               repeat:-1,
               width:"60%",
               yoyo:true
           },"-=1")

           TweenMax.set(LoginContent,{
               display:"none"
           });


         }
       }
    },
    mounted:function(){
       //EVENTO DE NAVEGACAO VIA MOUSE
       this.distancia = 0
       var delay = false;

      $(window).mousewheel((event)=>{

       if(delay) return;
       delay = true;
       setTimeout(function(){delay = false},300);

       this.distancia+=(event.deltaFactor*event.deltaY)*-1;

       if(this.distancia <=0){
           this.distancia = 0;
           return;
       }

       if(this.distancia >=1000){
           this.distancia = 1000;
           return;
       }

       console.log(this.distancia);

       if(this.distancia >= 200 &&  this.sectionAtual == "inicio")
       {
           this.ordemAnterior = 1;
           this.ordem = 2;
           this.sectionAtual = "sobre";
           this.animacaoSobre();
       }
       if(this.distancia >=400 &&  this.sectionAtual == "sobre")
       {
           this.ordemAnterior = 2;
           this.ordem = 3;
           this.sectionAtual = "equipe"
           this.animacaoEquipe();
           console.log(1);
       }

       if(this.distancia >=600 && this.sectionAtual == "equipe")
       {
           this.ordemAnterior = 3;
           this.ordem = 4;
           this.sectionAtual = "servicos"
           this.animacaoServicos();
           console.log(3);
       }
       if(this.distancia <= 600 &&  this.sectionAtual == "servicos")
       {
           this.ordemAnterior = 4;
           this.ordem = 3;
           this.sectionAtual = "equipe"
           this.animacaoEquipe();
       }

       if(this.distancia <=400 &&  this.sectionAtual == "equipe")
       {
           this.ordemAnterior = 3;
           this.ordem = 2;
           this.sectionAtual = "sobre"
           this.animacaoSobre();

       }

       if(this.distancia >=800 && this.sectionAtual == "servicos")
       {
         this.ordemAnterior = 4;
         this.ordem = 5;
           this.sectionAtual = "contato"
           this.animacaoContato();
       }


       if(this.distancia <=800 && this.sectionAtual == "contato")
       {
         this.ordemAnterior = 5;
         this.ordem = 4;
           this.sectionAtual = "servicos"
           this.animacaoServicos();
       }


       if(this.distancia <=200 && this.sectionAtual == "sobre")
       {
         this.ordemAnterior = 2;
         this.ordem = 1;
           this.sectionAtual = "inicio"
           this.animacaoInicio();
       }
       $('#nav-content li a').css({'color':'rgba(255,255,255, 0.5)'});
       $('#nav-content li a').eq(this.ordem - 1).css({'color':'#FFFFFF'});

      });
    }

})
