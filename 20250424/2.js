const estudiantes = [
  {
    nombre: "juan",
    apellido: "perez",
    correo: "joperez@espe.edu.ec",
    telefono: "0996624308",
  }
];
const createStyles = () => {
  const style = document.createElement("style");
  style.textContent = `
    body {font-family: san-serif},
    .container {}
    
  `;
};

const createlayout = () => {
  const container = document.createElement("div");
  container.className = "container";

  const form = document.createElement("form");
  form.id = "frmEstudiantes";

  const campos = [
    { label: "Nombre", type: "text", name: "nombre" },
    { label: "Apellido", type: "text", name: "apellido" },
    { label: "Correo", type: "text", name: "correo" },
    { label: "Telefono", type: "text", name: "telefono" },
  ];

  campos.forEach(({ label, type, name }) => {
    const fieldWrapper = document.createElement("div");
    const lbl = document.createElement("label");
    lbl.textContent = label;
    lbl.htmlFor = name;

    const inpt = document.createElement("input");
    inpt.type = type;
    inpt.id = name;
    inpt.name = name;
    inpt.required = true;

    fieldWrapper.appendChild(lbl);
    fieldWrapper.appendChild(inpt);
    form.appendChild(fieldWrapper);
  });

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Agregar usuario";
  form.appendChild(submitBtn);

  const table = document.createElement("table");
  table.id = "usersTable";

  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      ${campos.map((campo) => `<th>${campo.label}</th>`).join("")}
    </tr>
  `;

  table.appendChild(thead);
  table.appendChild(document.createElement("tbody"));

  container.appendChild(form);
  container.appendChild(table);
  document.body.appendChild(container);
};

const renderTable = () => {
  const tbody = document.querySelector("#usersTable tbody");
  tbody.innerHTML = "";
  estudiantes.forEach(({ nombre, apellido, correo, telefono }) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${nombre}</td>
      <td>${apellido}</td>
      <td>${correo}</td>
      <td>${telefono}</td>
    `;
    tbody.appendChild(row);
  });
};

document.addEventListener("DOMContentLoaded", () => {
  createlayout();
  renderTable();
});
