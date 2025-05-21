class FetchFoods extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  fetchFoods = async () => {
    try {
      const res = await fetch("https://devsapihub.com/api-fast-food");
      const foods = await res.json();
      console.log(foods);
      this.render(foods);
    } catch (error) {
      this.shadowRoot.innerHtml = `<h1>error</h1>`;
      console.log(error);
    }
  };

  render = (foods) => {
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
            width:50%;
              border-radius: 50% 
            }
    </style>

    `;

    const items = foods.map(u=>`

      <li class= "card">
        <img class="avatar" src="${u.image}">
        <h2>${u.name}</h2>
        <strong>Price: ${u.price}</strong>
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
    this.fetchFoods();
  }
}

window.customElements.define("fetch-foods", FetchFoods);
