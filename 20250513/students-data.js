const listado = [
  { id: 1, 
    cc: "1234567890",
     nombre: "Juan", 
     apellido: "Pérez", 
     nrc: "NRC001" 
  },
  {
    id: 2,
    cc: "2345678901",
    nombre: "María",
    apellido: "González",
    nrc: "NRC002",
  },
  {
    id: 3,
    cc: "3456789012",
    nombre: "Carlos",
    apellido: "López",
    nrc: "NRC003",
  },
  {
    id: 4,
    cc: "4567890123",
    nombre: "Ana",
    apellido: "Martínez",
    nrc: "NRC004",
  },
  {
    id: 5,
    cc: "5678901234",
    nombre: "Pedro",
    apellido: "Rodríguez",
    nrc: "NRC005",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("student-list");
  list.students = listado;

  const formSt = document.querySelector("students-form");
  formSt.addEventListener("student-added", (e) => {
    listado.push(e.detail);
    list.students = listado;
  });
});
