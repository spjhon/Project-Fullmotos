import "./style.css";
import "./src/css/textAnimation.css";


document.querySelector("#app").innerHTML = `
<div class="filterContainer">
  <div class="mainContent">
    <div class="mainContent__title">
      <h1 class="mainShadow retroshadow">CDA FULLMOTOS</h1>

      <div class="mainShadow rotating-text">
          <p class="mainShadow retroshadow">TECNICO-MECANICA</p>
          <p class="mainShadow retroshadow">
            <span class="word alizarin">rapido.</span>
            <span class="word wisteria">eficiente.</span>
            <span class="word peter-river">Hola aleja!.</span>
            <span class="word emerald">fabuloso.</span>
          </p>
      </div>
        
    </div>
  </div>
</div>

<div class="footer">
  <div class="footer__card">
    <div>horarios</div>
  </div>

  <nav class="footer__navBar">
    <a href="index.html">Inicio</a> | 
    <a href="./src/pages/about.html">Que Hacemos</a> |
    <a href="/pricing">Tarifas</a> |
    <a href="/contact">Contactanos</a>
  </nav>

  <div class="footer__card">
    <div>direccion redes sociales</div>
  </div>
</div>



`;