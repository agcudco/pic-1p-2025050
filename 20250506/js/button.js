class MiBoton extends HTMLElement {
  constructor() {
    super();

    const btn = document.createElement("button");

    btn.textContent = "Click me";

    btn.addEventListener("click", () => {
      alert("Hola desde el Custom Buttom");
    });

    this.appendChild(btn);
  }
}

window.customElements.define("mi-botoncito", MiBoton);
