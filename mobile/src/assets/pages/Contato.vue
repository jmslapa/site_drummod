<template>
  <section id="contato" class="contato">
    <div class="map">
      <div class="map__image">
        <div class="map__action">
          <a href="#" @click.prevent="active=!active" class="chegar">Como chegar</a>
        </div>
        <div class="map__info animated slideInRight">
          <div class="map__tel tk-sirba-web">+55 71 3273 2419</div>
          <div class="map__email tk-sirba-web">contato@drummond.com.br</div>
        </div>
      </div>
    </div>
    <form class="form animated slideInRight" id="form">
      <div class="form__item">
        <input type="text" placeholder="Nome" id="nome">
      </div>
      <div class="form__item">
        <input type="text" placeholder="Telefone" id="telefone">
      </div>
      <div class="form__item">
        <input type="email" placeholder="E-mail" id="email">
      </div>
      <div class="form__textarea">
        <div class="form__item">
          <label for>Mensagem</label>
          <div class="form__textareabtn">
            <textarea rows="4" id="msg"></textarea>
            <button v-on:click="enviar" type="button" class="enviar-form">
              <svg
                id="svg_btn"
                xmlns="http://www.w3.org/2000/svg"
                width="37.959"
                height="37.958"
                viewBox="0 0 37.959 37.958"
              >
                <g
                  id="Agrupar_5059"
                  data-name="Agrupar 5059"
                  transform="translate(-0.672 40.98) rotate(-90)"
                >
                  <circle
                    id="Elipse_84"
                    data-name="Elipse 84"
                    cx="18.979"
                    cy="18.979"
                    r="18.979"
                    transform="translate(3.021 0.673)"
                    fill="#fff"
                    opacity="0.1"
                  ></circle>
                  <path
                    id="Caminho_31"
                    data-name="Caminho 31"
                    d="M-426.927,276.943l-6.622,6.622-6.622-6.622"
                    transform="translate(455.356 -259.457)"
                    fill="none"
                    stroke="#fff"
                    stroke-width="2"
                  ></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>
    <div id="modal" class="modal" :class="{'modal--mostrar':active}">
      <div class="modal__container">
        <button @click="active=!active" class="modal--fechar">x</button>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7775.64234372837!2d-38.453234!3d-12.983287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7161b0f8885db91%3A0xd2d3f3e9d1f0f99a!2sCondom%C3%ADnio+Garcia+D&#39;%C3%81vila!5e0!3m2!1spt-BR!2sbr!4v1554227738182!5m2!1spt-BR!2sbr"
          width="300"
          height="250"
          frameborder="0"
          style="border:0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      page: {
        name: "contato",
        frontTitle: "Contato"
      },
      active: false
    };
  },
  methods: {
    enviar: function() {
      let name = document.getElementById("nome").value;
      let telefone = document.getElementById("telefone").value;
      let email = document.getElementById("email").value;
      let msg = document.getElementById("msg").value;
      var formdata = new FormData();
      formdata.append("name", name);
      formdata.append("telefone", telefone);
      formdata.append("email", email);
      formdata.append("msg", msg);
      fetch("http://localhost/drummond/backend/mail-send.php", {
        method: "POST",
        body: formdata
      })
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          let btn = document.getElementsByClassName("enviar-form")[0];
          btn.innerHTML = "";
          if (json.status == 1) {
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
            window.setTimeout(function() {
              location.reload();
            }, 2000);
          } else {
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
            window.setTimeout(function() {
              btn.innerHTML = `
                    <div class="row">
                     <div>
                        <svg id="svg_btn" xmlns="http://www.w3.org/2000/svg" width="37.959" height="37.958" viewBox="0 0 37.959 37.958">
                          <g id="Agrupar_5059" data-name="Agrupar 5059" transform="translate(-0.672 40.98) rotate(-90)">
                            <circle id="Elipse_84" data-name="Elipse 84" cx="18.979" cy="18.979" r="18.979" transform="translate(3.021 0.673)" fill="#fff" opacity="0.1"/>
                            <path id="Caminho_31" data-name="Caminho 31" d="M-426.927,276.943l-6.622,6.622-6.622-6.622" transform="translate(455.356 -259.457)" fill="none" stroke="#fff" stroke-width="2"/>
                          </g>
                        </svg>
                      </div>
                    </div>`;
            }, 2000);
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  created() {
    this.$emit("notHomePage", this.page);
  }
};
</script>

<style>
</style>
