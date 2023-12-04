import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
<div class="mainContent">
<div class="mainContent_title">
  <h1>CENTRO DE DIAGNOSTICO AUTOMOTOR FULLMOTOS</h1>
  <h2>CONFIABLE, RAPIDO, RESPONSABLE</h2>
</div>
</div>

<div class="content">
<div class="card">
  <div>horarios</div>
</div>

<nav class="navBar">
  <a href="index.html">Inicio</a> | 
  <a href="./src/pages/about.html">Que Hacemos</a> |
  <a href="/pricing">Tarifas</a> |
  <a href="/contact">Contactanos</a>
</nav>

<div class="card">
  <div>direccion redes sociales</div>
</div>
</div>
`;

setupCounter(document.querySelector("#counter"));
