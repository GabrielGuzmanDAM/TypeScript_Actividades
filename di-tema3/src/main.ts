import './style.css'
import pallo from './assets/pallo.png'

//import './topies/1-tipo-basico.ts';
//import './topies/m_3-7_Funciones.ts';
//import './topies/t_3-4_trabajando-com-funciones.ts';
//import './topies/04-tarea-tipos.ts';
//import './topies/T_3.6_Desestructurando_objetos.ts';
//import './topies/T 3.8 Desestructurando Argumentos/T_3.8_Desestructurando_Argumentos.ts';
//import './topies/T 3.8 Desestructurando Argumentos/06-desest-funciones.ts';
//import './topies/T 3.7 Desestructurando Arrays';
//import './topies/T 3.9 Importando y exportando/t9modulo-alumnos';
import './topies/T 3.10 Trabajando con Clases/T 3.10 Trabajando con Clases.ts';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${pallo}" class="base" width="170" height="179">
  </div>
  <div>
    <h1>Hola a todos soy Gabriel </h1>
    <p>Cononisido en ningun lado como Don.Pelele</p>
  </div>
  <button id="counter" type="button" class="counter"> no sirve para nada</button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
    <h2>Documentos egolatras </h2>
    <p>(son de mi)</p>
    <ul>
      <li>
        <a href="https://canva.link/k8kn1e6yajdbz20" target="_blank">
          Mi currículo vitae
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
    <h2>Mis redes sociales</h2>
    <p>(no tengo)</p>
    <ul>
      <li><a href="https://github.com/GabrielGuzmanDAM" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`
