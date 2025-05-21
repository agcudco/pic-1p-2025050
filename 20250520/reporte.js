class ReporteGeneral extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });

    const style = document.createElement("style");
    this.container = document.createElement("div");

    this.shadow.appendChild(style);
    this.shadow.appendChild(this.container);
  }

  async connectedCallback() {
    try {
      await this.loadData();
      this.render();
    } catch (error) {
      console.log("Error al cargar los datos");
    }
  }

  loadData = async () => {
    const response = await fetch("./data.json");
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    this.data = await response.json();
    return this.data;
  };

  getTotalSalesByCompany = () => {
    if (!Array.isArray(this.data)) return {};
    return this.data.reduce((acc, item) => {
      const { empresa, ventas } = item;
      const totalVentas = Object.values(ventas).reduce(
        (sum, val) => sum + val,
        0
      );
      acc[empresa] = (acc[empresa] || 0) + totalVentas;
      return acc;
    }, {});
  };

  generateReport = () => {
    const totals = this.getTotalSalesByCompany();
    const ul = document.createElement("ul");

    Object.entries(totals).forEach(([empresa, total]) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${empresa}</strong>: <span class="total">${total}</span>`;
      ul.appendChild(li);
    });

    return ul;
  };

  render = () => {
    this.container.innerHTML = "";
    this.container.appendChild(this.generateReport());
  };
}

window.customElements.define("reporte-general", ReporteGeneral);
