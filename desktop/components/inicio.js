Vue.component("inicio",{
    
     template:`
     
     <div id="inicio">
       
     <div id="modal-background" v-on:click=""></div>
    


     <div class="conteiner-fluid inicio-box"></div>
     
     <div class="conteiner-fluid inicio-box" id="inicio_centro">
        <img src="assets/imagens/drummond_line.svg" id="logo_linha">
        <img src="assets/imagens/drummond.svg" id="logo_preenchida">

    </div>
    
     <div class="conteiner-fluid inicio-box">

          <div class="conteiner-fluid menu-conteiners"></div>
          <div class="conteiner-fluid menu-conteiners"></div>
          <div class="conteiner-fluid menu-conteiners">
          
                <div id="menu-empresas">
                        
                   </div>

          </div> 

     </div>   
     </div>
     `,
     data(){
          console.log(screen.availWidth)
         return{

         }
     },
     methods:{
          
          // AbrirModal:function(event,empresa){
          
          //      if(event.target.id == "hover" || event.target.id == "hover1"){
                    
          //      var modalBackground = document.getElementById("modal-background");
          //      var nomeEmpresa = document.getElementById("menu-empresas-titulo-topo");
          //      var background = document.getElementById('background');
          //      document.getElementById("menu-conteiner-inicio").style.filter = "blur(4px)"
          //      document.getElementById('inicio_centro').style.filter = 'blur(5px)';
          //      document.getElementById('modal-background').style.opacity = '0.3';
          //      document.getElementById('modal-background').style.filter = 'brightness(0.2)';
          //      document.getElementById('background').style.filter = 'blur(4px)';
          //      document.getElementById('menu-empresas-titulo-topo').style.textAlign="center";
          //      document.getElementById('menu-empresas-titulo-topo').style.opacity="0";

          //      TweenMax.to(nomeEmpresa,1,{
          //           opacity:1
          //      });

          //      TweenMax.to(background,1,{
          //           filter:"blur(4px)"
          //      });
               
          //      $("#menu").css("z-index","1000");
          //      $("#"+modalBackground.id).css("z-index","1010");
          //      $("#menu-empresas").css("z-index","1500");
          //      $("#"+modalBackground.id).css("display","block");
          //      this.abrirColunasEmpresas(empresa);
          //   }
          // },
          // abrirColunasEmpresas(empresa){
              
          //      var sitesContent = document.querySelectorAll(".conteiner-fluid.box-modal-inicio");
          //      TweenMax.to(sitesContent,.3,{
          //           opacity:0,
          //           onStart:()=>{
          //                if(empresa == "wtf"){
          //                     document.getElementById('menu-empresas-titulo-topo').style.textAlign="right";
          //                     document.getElementById('menu-empresas-titulo-topo').style.paddingRight="28%";
          //                     $("#menu-empresas-titulo-topo b")
          //                }else{
          //                     document.getElementById('menu-empresas-titulo-topo').style.textAlign="left";
          //                     document.getElementById('menu-empresas-titulo-topo').style.paddingLeft="28%";
          //                }
          //           },
          //           onComplete:()=>{
          //                var coluna = null
          //                var nomeEmpresa = null
          //                if(empresa == "wtf"){
          //                   coluna = document.getElementById("wtf");
          //                   $("#"+coluna.id).css("display","block");
          //                   $("#tel").css("display","none");
          //                }else{
          //                     coluna = document.getElementById("tel");
          //                     $("#"+coluna.id).css("display","block");
          //                     $("#wtf").css("display","none");
          //                }
          //                nomeEmpresa = document.getElementById('menu-empresas-titulo-topo');
          //                var tl = new TimelineMax();
          //                tl.to([coluna,nomeEmpresa],1,{
          //                     opacity:1
          //                })
                         
          //           }
          //      })
               
          // },
          // fecharModal:function(){
               
          //      var modalBackground = document.getElementById("modal-background");
          //      document.getElementById("menu-conteiner-inicio").style.filter = "blur(0)"
          //      document.getElementById('inicio_centro').style.filter = 'blur(0)';
          //      document.getElementById('modal-background').style.opacity = '0';
          //      document.getElementById('modal-background').style.filter = 'brightness(0)';
          //      document.getElementById('background').style.filter = 'blur(0)';
          //      document.getElementById('menu-empresas-titulo-topo').style.opacity="1";
          //      document.getElementById('menu-empresas-titulo-topo').style.textAlign="center";
          //      document.getElementById('menu-empresas-titulo-topo').style.paddingRight="0%";
          //      document.getElementById('menu-empresas-titulo-topo').style.paddingLeft="0%";
               
          //      $("#menu").css("z-index","1010");
          //      $("#"+modalBackground.id).css("z-index","1000");
          //      $("#menu-empresas").css("z-index","1000");
          //      $("#"+modalBackground.id).css("display","block");
          //      var sitesContent = document.querySelectorAll(".conteiner-fluid.box-modal-inicio");
          //      var tl = new TimelineMax();
          //      tl.to(sitesContent,.3,{
          //           opacity:0,
          //           onComplete:()=>{
          //                $(sitesContent).css("display","none");
          //           }
          //      }).to(modalBackground,1,{
          //           opacity:0
          //      });
          // }
          
     },
     mounted:function(){
     //    $(".box-modal-inicio").css("display","none");
     }
})