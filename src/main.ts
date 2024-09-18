import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';
import { personas } from './Desctruc_Interfaces_TS.ts';

// Función para mostrar en la vista web
function mostrarEmpleadosYCargos() {
  
  const appDiv = document.querySelector<HTMLDivElement>('#app')!;
  
  
  const empleadosHTML = personas.map(persona => {
    const { nombre, empleados } = persona; // Desestructuración de nombre
    return `
      <li><strong>Nombre: ${nombre}</strong>
        <ul>
          ${empleados.map(empleado => {
            const { cargo } = empleado; // Desestructuración del cargo
            return `<li>Cargo: ${cargo}</li>`;
          }).join('')}
        </ul>
      </li>
    `;
  }).join('');

  // Inyectar el HTML generado en el contenedor
  appDiv.innerHTML += `
    <h2>Lista de Personas y Empleos</h2>
    <ul>${empleadosHTML}</ul>
  `;
}

// Renderizado de la estructura en modo web
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Deconstruccion e Interfaces en TS
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

// Llama a la función para mostrar la lista de empleados y su cargo:
mostrarEmpleadosYCargos();
