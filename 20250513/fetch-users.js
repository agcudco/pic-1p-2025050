class FetchUser extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  fetchUsers = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await res.json();
      console.log(users);
      this.render(users);
    } catch (error) {
      this.shadowRoot.innerHtml = `<h1>error</h1>`;
      console.log(error);
    }
  };

  render = (users) => {
    const style = `
           <style>
        .grid{
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 20px;
            list-style: none;
        }
        .card{
            
            border-radius: 8px;
        }

            .avatar{
              border-radius: 50% 
            }
    </style>

    `;

    const items = users.map(u=>`

      <li class= "card">
        <img class="avatar" src="https://i.pravatar.cc/150?img=${u.id}">
        <h2>${u.name}</h2>
        <strong>${u.email}</strong>
      </li>
    `).join('');

    this.shadowRoot.innerHTML = `
      ${style}
      <ul class="grid">
        ${items}
      </ul>
    `;
  };

  connectedCallback() {
    this.fetchUsers();
  }
}

window.customElements.define("fetch-users", FetchUser);
