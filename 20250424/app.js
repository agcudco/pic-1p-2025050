const body = document.body;

const container = document.createElement("div");
container.style.border = "2px solid red";
container.style.borderRadius = "1rem";
container.style.width = "600px";
container.style.padding = "20px";
container.style.margin = "50px auto";
container.style.boxShadow = "2px 2px 10px rgba(0,0,0,0.2)";
body.appendChild(container);

const titulo = document.createElement("h1");
titulo.textContent = "LISTA DE TAREAS";
titulo.style.textAlign = "center";
container.appendChild(titulo);

const input = document.createElement("input");
input.type = "text";
input.style.borderRadius = "5px";
input.style.padding = "10px";
input.style.marginBottom = "10px";
input.style.width = "calc(100% - 2px)";
input.placeholder = "Escriba una tarea";
container.appendChild(input);

const button = document.createElement("button");
button.textContent = "Agregar texto";
button.style.background = "green";
button.style.borderRadius = "5px";
button.style.padding = "10px";
button.style.width = "100%";
container.appendChild(button);

const tasklist = document.createElement("ul");
container.appendChild(tasklist);

let tareas = [];

const renderTareas = () => {
  tasklist.innerHTML = "";
  tareas.forEach((tarea, index) => {
    const listItem = document.createElement("li");
    listItem.textContent = tarea.text;
    listItem.style.padding = "10px";
    listItem.style.marginBottom = "10px";
    listItem.style.cursor = "pointer";
    listItem.style.border = "1px solid #ddd";

    if (tarea.completed) {
      listItem.style.textDecoration = "line-through";
      listItem.style.backgroundColor = "red";
    }

    listItem.addEventListener("click", () => {
      tareas = tareas.map((t, i) =>
        i === index ? { ...t, completed: !t.completed } : t
      );
      alert("Tarea completada exitosamente");
      renderTareas();
    });

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.style.cursor = "pointer";
    btnEliminar.style.color = "white";
    btnEliminar.style.padding = "3px 6px";
    btnEliminar.style.marginLeft = "10px";
    btnEliminar.style.backgroundColor = "#dc3545";
    btnEliminar.style.float = "right";

    btnEliminar.addEventListener("click", () => {
      tareas = tareas.filter((ta, i) => i !== index);
      alert("Tarea Eliminada");
      renderTareas();
    });

    listItem.appendChild(btnEliminar);
    tasklist.appendChild(listItem);
  });
};

button.addEventListener("click", () => {
  const textoTarea = input.value.trim();
  if (textoTarea !== "") {
    tareas.push({ text: textoTarea, completed: false });
    input.value = "";
    renderTareas();
  }
});
