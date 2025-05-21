class StudentList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this._students = [];
  }

  connectedCallback() {
    this.render();
  }

  set students(arr) {
    if (!Array.isArray(arr)) return;
    this._students = arr;
    this.render();
  }

  get students() {
    return this._students;
  }

  render() {
    this.shadowRoot.innerHTML = "";

    const style = document.createElement("style");
    style.textContent = `
        /* Estilo general para la table */
table {
  width: 100%;
  border-collapse: collapse; /* Elimina el espacio entre celdas */
  font-family: 'Arial', sans-serif;
  margin-top: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra sutil alrededor de la table */
}

/* Estilo para los encabezados */
table thead {
  background-color: #007BFF; /* Color de fondo azul */
  color: white; /* Texto blanco */
}

table th {
  padding: 12px 15px;
  text-align: left;
  font-size: 1.1rem;
}

/* Estilo para las filas del cuerpo de la table */
table tbody tr {
  background-color: #fff;
  border-bottom: 1px solid #f2f2f2; /* Línea suave entre filas */
}

/* Alternancia de color de filas */
table tbody tr:nth-child(odd) {
  background-color: #f9f9f9; /* Color suave para filas impares */
}

/* Estilo para las celdas */
table td {
  padding: 12px 15px;
  text-align: left;
  font-size: 1rem;
  color: #333;
}

/* Efecto al pasar el ratón sobre una fila */
table tbody tr:hover {
  background-color: #eaeaea; /* Color gris claro al pasar el ratón */
  cursor: pointer; /* Cambia el cursor a puntero */
}

/* Bordes de las celdas */
table th, table td {
  border: 1px solid #ddd;
}

/* Estilo para la primera columna (id) */
table td:first-child, table th:first-child {
  width: 50px; /* Asigna un tamaño fijo a la columna ID */
}

    `;

    const table = document.createElement("table");
    const thead = document.createElement("thead");
    thead.innerHTML = `
        <tr>
            <th>ID</th>
            <th>C.C.</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>NRC</th>
            <th>Acciones</th>
        </tr>
    `;
    const tbody = document.createElement("tbody");

    this._students.forEach(({ id, cc, nombre, apellido, nrc }) => {
      const fila = document.createElement("tr");
      fila.innerHTML = `
        <td>${id}</td>
        <td>${cc}</td>
        <td>${nombre}</td>
        <td>${apellido}</td>
        <td>${nrc}</td>
        <td>
          <button>Actualizar</button>
          <button>Eliminar</button>
        </td>
      `;
      tbody.appendChild(fila);
    });

    table.appendChild(thead);
    table.appendChild(tbody);
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(table);
  }
}

window.customElements.define("student-list", StudentList);
