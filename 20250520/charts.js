class Charts extends HTMLElement {
  constructor() {
    super();

    this.shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");

    this.canvas = document.createElement("canvas");

    this.shadow.appendChild(style);
    this.shadow.appendChild(this.canvas);
  }
}

window.customElements.define("reportes-charts", Charts);
