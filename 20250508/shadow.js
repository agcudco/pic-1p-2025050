class CardUser extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    const container = document.createElement("div");
    container.classList.add("card");

    const style = document.createElement("style");
    style.textContent = `
        /* Estilo general de la tarjeta */
.card {
  width: 300px;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

/* Efecto al pasar el mouse sobre la tarjeta */
.card:hover {
  transform: translateY(-5px);
}

/* Estilo para la foto de perfil */
.foto {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 15px;
  border: 3px solid #007BFF;  /* Un borde azul alrededor de la imagen */
}

/* Estilo para el nombre */
.name {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin: 0 0 10px 0;
}

/* Estilo para el correo electrónico */
.email {
  font-size: 1rem;
  color: #555;
  margin: 0;
}

/* Estilo general del texto */
.card p, .card h2 {
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}


    `;

    const name = this.getAttribute("name") || "Anonimo";
    const email = this.getAttribute("email") || "a@gmail.com";
    const photo = this.getAttribute("foto");

    const nombre = document.createElement("h2");
    nombre.textContent = name;
    nombre.classList.add("name");

    const correo = document.createElement("p");
    correo.textContent = email;
    correo.classList.add("email");

    const foto = document.createElement("img");
    foto.src = photo;
    foto.classList.add("foto");
    container.appendChild(foto);

    container.appendChild(nombre);
    container.appendChild(correo);

    shadow.appendChild(style);
    shadow.appendChild(container);
  }
}

window.customElements.define("user-card", CardUser);
