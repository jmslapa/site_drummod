window.onload = function() {
  var app = new Vue({
    el: "#app",
    data() {
      return {};
    },
    mounted: function() {
      if (screen.width < 1024) {
        window.location.href = "http://172.16.0.229:9000/drummond/mobile";
      }
      //CONFIGURACOES INICIAS ELEMENTOS
      var quemsomosContent = document.getElementById("quemsomos_content");
      var valoresContent = document.getElementById("valores_content");
      var textContent = document.getElementById("text-content");

      var ColunaSlider = document.getElementById("coluna-slider");

      TweenMax.set(quemsomosContent, {
        y: -100,
        x: -50,
        opacity: 0
      });

      TweenMax.set(valoresContent, {
        y: 300,
        opacity: 0
      });

      TweenMax.set(textContent, {
        x: -500
      });

      TweenMax.set(ColunaSlider, {
        opacity: 0
      });
    }
  });
};
