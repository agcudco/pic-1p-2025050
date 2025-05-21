class StudentForm extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render = () => {
    this.shadowRoot.innerHTML = "";
    this.shadowRoot.innerHTML = `
        <style>
            form{

            }
            input,button{

            }
            button{
                cursor:pointer
            }
        </style>
        <form id="form-students">
            <input 
                type="text" 
                name="cc" 
                placeholder="Ingrese su cedula" 
                required />
            <input
                type="text"
                name="nombre"
                placeholder="Ingrese su nombre"
                required
            />
            <input
                type="text"
                name="apellido"
                placeholder="Ingrese su apellido"
                required
            />
            <input 
                type="text" 
                name="nrc" 
                placeholder="Ingrese su NRC" 
                required 
            />
            <button type="submit">Registrar</button>
        </form>
    `;

    this.shadowRoot
      .getElementById("form-students")
      .addEventListener("submit", (e) => {
        e.preventDefault();

        const form = e.target;

        const student = {
          id: 0,
          cc: form.cc.value.trim(),
          nombre: form.nombre.value.trim(),
          apellido: form.apellido.value.trim(),
          nrc: form.nrc.value.trim(),
        };

        this.dispatchEvent(
          new CustomEvent("student-added", {
            detail: student,
            bubbles: true,
            composed: true,
          })
        );

        form.reset();
      });
  };
}

window.customElements.define("students-form", StudentForm);
