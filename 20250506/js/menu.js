class MainMenu extends HTMLElement {
  constructor() {
    super();

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("class-container");

    const opMenu = [
      "Quienes Somos",
      "Oferta Académica",
      "Admisión",
      "Investigación",
      "Vinculación",
    ];

    const options = [
      { label: "Quienes Somos", url: "info.html" },
      { label: "Oferta Académica", url: "oferta.html" },
    ];

    opMenu.forEach((op) => {
      const item = document.createElement("li");
      item.textContent = op;
      menuContainer.appendChild(item);
    });

    this.appendChild(menuContainer);
  }
}

window.customElements.define("main-menu", MainMenu);
