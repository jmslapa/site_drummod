Vue.component("contato",{
    template:`
        <div id="contato" class="conteiner-fluid">

               <div id="contato-content" class="conteiner-fluid">

               <div class="row">
                    <div class="col-12" id="contato-topo">

                        <div class="row" style="height:100%">
                            <div class="col-10" id="mapa-content"></div>
                            <div class="col-2"></div>
                        </div>

                   </div>
                </div>


                <div class="row" style="height:48%;" >

                    <div class="col-8" id="contato-card">
                        <span id="btn-mapa"><a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.821258480536!2d-38.45542228560332!3d-12.983281463560695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b0488131785%3A0x95855a035637eeb2!2sCondom%C3%ADnio+Edif%C3%ADcio+Garcia+D+Avila+-+Av.+Tancredo+Neves%2C+1543+-+Pituba%2C+Salvador+-+BA%2C+41820-021!5e0!3m2!1spt-BR!2sbr!4v1551975704040" data-featherlight="iframe" data-featherlight-iframe-width="600" data-featherlight-iframe-height="450">Como Chegar</a></span>

                        <div id="contato-header">
                            <h3>+55 71 3273-2419</h3><br>
                            <b>contato@drummondpar.com</b>
                        </div>

                        <form id="c-form">

                          <div id="contato-form" >
                          <div class="alert alert-light" id="msg" hidden role="alert" style="opacity: 0.8;">
                            
                          </div>
                            <div class="row">
                              <div class="col-4">
                                <div class="form-group">
                                  <input id="nome" name="nome" type="text" placeholder="Nome" class="form-control contato-form-campos">
                                </div>
                              </div>
                              <div class="col-4">
                                <div class="form-group">
                                  <input id="telefone" name="telefone" type="text" placeholder="Telefone" class="form-control contato-form-campos">
                                </div>
                              </div>
                              <div class="col-4">
                                <div class="form-group">
                                  <input id="email" name="email" type="email" placeholder="E-mail" class="form-control contato-form-campos">
                                </div>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-11">
                                <div class="form-group">
                                  <input id="mensagem" name="mensagem" type="text" placeholder="Mensagem" class="form-control contato-form-campos">
                                </div>
                              </div>
                              <div class="col-1 pl-2 pr-0 pt-3">
                                <button type="button" v-on:click="enviar" id="button-enviar-form" class="send">
                                <div class="row">
                                  <div>
                                      <svg id="svg_btn" xmlns="http://www.w3.org/2000/svg" width="37.959" height="37.958" viewBox="0 0 37.959 37.958">
                                        <g id="Agrupar_5059" data-name="Agrupar 5059" transform="translate(-0.672 40.98) rotate(-90)">
                                          <circle id="Elipse_84" data-name="Elipse 84" cx="18.979" cy="18.979" r="18.979" transform="translate(3.021 0.673)" fill="#fff" opacity="0.1"/>
                                          <path id="Caminho_31" data-name="Caminho 31" d="M-426.927,276.943l-6.622,6.622-6.622-6.622" transform="translate(455.356 -259.457)" fill="none" stroke="#fff" stroke-width="1"/>
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                    </div>

                    <div class="col-4">
                        <div id="logo-drummond">
                           <img src="assets/imagens/drummond_black.svg">
                        </div>

                    </div>
                </div>

                <div class="row" id="row-rodape-contato">

               <div class="col-6" style="border-right: solid 0.5px rgba(255,255,255,0.5);">

               </div>

               <div class="col-6">

                    <div id="rodape-contatos">
                        <p>Copyright © 2018-2019 - Drummond, todos os direitos reservados. Desenvolvido por Wtf Tecnologia Ltda.</p>
                    </div>

               </div>

            </div>

               </div>

               <div id="linha-externa-contato"></div>

        </div>
    `,
    data(){
        return {

        }
    },
    methods:{
      enviar:function() {
        
        if($('#nome').val() === ''){
          $('#msg').html('Favor insira um nome para encaminhar o email.');
          $('.alert').attr("hidden", false);
          window.setTimeout(function (){
            $('.alert').attr("hidden", true);
          },3000)
          return
        }else if($('#telefone').val() === ''){
          $('#msg').html('Favor insira um telefone para encaminhar o email.');
          $('.alert').attr("hidden", false);
          window.setTimeout(function (){
            $('.alert').attr("hidden", true);
          },3000)
          return
        }else if($('#email').val() === ''){
          $('#msg').html('Favor insira um email para encaminhar o email.');
          $('.alert').attr("hidden", false);
          window.setTimeout(function (){
            $('.alert').attr("hidden", true);
          },3000)
          return
        }else if($('#mensagem').val() === ''){
          $('#msg').html('Favor insira um mensagem para encaminhar o email.');
          $('.alert').attr("hidden", false);
          window.setTimeout(function (){
            $('.alert').attr("hidden", true);
          },3000)
          return
        }

        document.getElementById('button-enviar-form').classList.add('is-loading');
        var form = new FormData(document.getElementById('c-form'));
          fetch("backend/mail-send.php", {
            method: "POST",
            body: form
          }).then(function(response){
            return response.json();
          }).then(function(json){
              const btn = document.getElementById('button-enviar-form');

              btn.innerHTML = '';
              if(json.status == 1){
                btn.classList.add('is-success');
                
                btn.innerHTML = `
                <div class="row">
                  <div>
                    <svg id="svg_btn" xmlns="http://www.w3.org/2000/svg" width="37.959" height="37.958" viewBox="0 0 37.959 37.958">
                      <g id="Agrupar_5059" data-name="Agrupar 5059" transform="translate(-0.672 40.98) rotate(-90)">
                        <circle id="Elipse_84" data-name="Elipse 84" cx="18.979" cy="18.979" r="18.979" transform="translate(3.021 0.673)" fill="#fff" opacity="0.1"/>
                      </g>
                    </svg>
                  </div>
                  <div style="position: absolute;">
                    <svg viewBox="-60 -70 210 205">
                      <polyline class="check" fill="none" stroke="#FFFFFF" stroke-width="8" stroke-miterlimit="10" points="1.768,23.532 34.415,56.179 88.826,1.768" />
                    </svg>
                  </div>
                </div>`;
                
                btn.classList.remove('is-loading');

                window.setTimeout(function (){location.reload()}, 2000);
              }else{
                
                btn.classList.add('is-success');

                btn.innerHTML = `
                <div class="row">
                  <div>
                    <svg id="svg_btn" xmlns="http://www.w3.org/2000/svg" width="37.959" height="37.958" viewBox="0 0 37.959 37.958">
                      <g id="Agrupar_5059" data-name="Agrupar 5059" transform="translate(-0.672 40.98) rotate(-90)">
                        <circle id="Elipse_84" data-name="Elipse 84" cx="18.979" cy="18.979" r="18.979" transform="translate(3.021 0.673)" fill="#fff" opacity="0.1"/>
                      </g>
                    </svg>
                  </div>
                  <div style="position: absolute;">
                    <svg viewbox="-10 -8 60 55">
                        <path class="close" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-miterlimit="10" d="M 10,10 L 30,30 M 30,10 L 10,30" />
                    </svg>
                  </div>
                </div>`;
                
                btn.classList.remove('is-loading');

                  window.setTimeout(function (){
                    btn.innerHTML = `
                      <div class="row">
                       <div>
                          <svg id="svg_btn" xmlns="http://www.w3.org/2000/svg" width="37.959" height="37.958" viewBox="0 0 37.959 37.958">
                            <g id="Agrupar_5059" data-name="Agrupar 5059" transform="translate(-0.672 40.98) rotate(-90)">
                              <circle id="Elipse_84" data-name="Elipse 84" cx="18.979" cy="18.979" r="18.979" transform="translate(3.021 0.673)" fill="#fff" opacity="0.1"/>
                              <path id="Caminho_31" data-name="Caminho 31" d="M-426.927,276.943l-6.622,6.622-6.622-6.622" transform="translate(455.356 -259.457)" fill="none" stroke="#fff" stroke-width="1"/>
                            </g>
                          </svg>
                        </div>
                      </div>`;

                }, 2000);
              }
           
          }).catch(function(err){
            console.log(err);
          });

        }
      },
    mounted(){

    }
})
