const GraficoLineas = class extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    };

    async connectedCallback() {
        await this.render();
    };

    fetchData = async () => {
        try {
            const res = await fetch('data.json');
            if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);
            const data = await res.json();
            console.log('Datos recibidos:', data);
            return data;
        } catch (error) {
            console.error('No se pudieron cargar los datos:', error);
            this.shadowRoot.innerHTML = `<p>Error cargando datos.</p>`;
        }
    };

    render = async () => {
        const data = await this.fetchData();

        if (!data || !Array.isArray(data)) return;

        const labels = data.map(item => item.anio);
        const hombres = data.map(item => item.hombres);
        const mujeres = data.map(item => item.mujeres);

        this.shadowRoot.innerHTML = ''; // Limpiar

        const canvas = document.createElement('canvas');
        this.shadowRoot.appendChild(canvas);

        new Chart(canvas, {
            type: 'line',
            data: {
                labels,
                datasets: [
                    {
                        label: 'Hombres',
                        data: hombres,
                        borderColor: 'blue',
                        fill: false
                    },
                    {
                        label: 'Mujeres',
                        data: mujeres,
                        borderColor: 'pink',
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: { title: { display: true, text: 'AÑO' } },
                    y: { title: { display: true, text: 'Cantidad' } }
                }
            }
        });
    };
};

customElements.define('reporte-charts', GraficoLineas);