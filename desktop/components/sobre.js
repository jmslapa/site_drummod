Vue.component("sobre", {
  template: `
     <div id="sobre">
     <div class="conteiner-fluid conteiners-sobre" style="height:20%"></div>
     <div class="conteiner-fluid conteiners-sobre">
          <div class="row">
               <div class="col-3"></div>
               <div class="col-6">
                   <div class="row">
                     <div class="col-12" id="quemsomos_content">
                          <h3 class="sobre-titulo">Quem somos</h3>
                          <p>Acompanhando o crescimento dos nossos negócios, a Drummond Participações foi criada com o objetivo de otimizar os processos executados nas diversas áreas administrativas das empresas do grupo, gerando riqueza e garantindo a longevidade através de gerações.</p>
                     </div>
                   </div>                   
                   <div class="row" id="valores_content">
                       <div class="col-4 col-sobre">
                             <h3 class="sobre-titulo">Missão</h3>
                             <p>Realizar uma gestão eficaz dos investimentos e processos administrativos e identificar oportunidades que criem valor às empresas associadas.</p>
                       </div>
                       <div class="col-4 col-sobre">
                             <h3 class="sobre-titulo">Visão</h3>
                             <p>Contribuir com o crescimento das empresas atendidas e promover a sinergia no grupo econômico com atuação ética profissional e qualidade no atendimento, visando a perpetuidade de suas associadas.</p>
                       </div>
                       <div class="col-4 col-sobre">
                             <h3 class="sobre-titulo">Valores</h3>
                             <ul>
                                 <li>Ética</li>
                                 <li>Transparência</li>
                                 <li>Comprometimento</li>
                                 <li>Melhoria Contínua</li>
                                 <li>Meritocracia</li>
                             </ul>
                       </div>
                   </div>
               </div>
               <div class="col-3"></div>
          </div>
     </div>
	 <linha-sobre></linha-sobre>
     <div class="conteiner-fluid conteiners-sobre"></div>
</div>
      `,
  data() {
    return {};
  }
});
