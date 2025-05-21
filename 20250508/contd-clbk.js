class HolaMundo extends HTMLElement {
  constructor() {
    super();
    console.log('estoy en el constructor')
    this._shadow = this.attachShadow({ mode: "open" });

    const wrapper = document.createElement("div");
    wrapper.textContent = "inicializando....";
    this._shadow.appendChild(wrapper);

    const style = document.createElement("style");
    style.textContent = `
        div {
  background-color: #f4f7f6; /* Fondo suave, color gris claro */
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
  font-family: 'Arial', sans-serif;
  transition: background-color 0.3s ease-in-out;
}

/* Efecto de hover para cambiar el fondo */
div:hover {
  background-color: #e0e4e3; /* Fondo ligeramente más oscuro al pasar el ratón */
}
    `;

    this._shadow.appendChild(style);
  }

  connectedCallback() {
    console.log("<hola-mundo> desde connected callback");
    const div = this._shadow.querySelector("div");
    div.textContent = "hola Mundo";
  }
}

window.customElements.define("hola-mundo", HolaMundo);
