const control = document.forms.controlador;
const tabla = document.querySelector('table tbody');
let mode = "companies"

/*Imprimir en el select los continentes*/

for (const elemento of companies) {
    const nuevoElem = document.createElement("option");
    nuevoElem.textContent = elemento.continent;
    nuevoElem.value = elemento.continent;

    control.continente.appendChild(nuevoElem);
}

/*Cambio de modo en los botones*/

control.addEventListener('click', (e) => {
    if(control.continente.value != ""){
        if (e.target.id == 'paises') {
            mode = "paises";
            updateTabla()
        } else if (e.target.id == 'num') {
            mode = "num";
            updateTabla()
        } else if (e.target.id == 'companias') {
            mode = "companias";
            updateTabla()
        }
    }
})

/*Obtencion de datos*/

function getDatos(continente) {
    for (const elemento of companies) {
        if (elemento.continent == continente) {
            return elemento.countries;

        }
    }

    return null;
}

/*Imprimir datos*/

function updateTabla() {
    tabla.innerHTML = '';
    if (control.continente.value != "") {
        for (const elemento of getDatos(control.continente.value)) {
            const nuevaFila = document.createElement("tr");

            const columna1 = document.createElement("td");
            columna1.textContent = elemento.name;
            nuevaFila.appendChild(columna1);


            if (mode == "companias" || mode == "num") {
                const columna2 = document.createElement("td");
                columna2.textContent = elemento.companies.length;
                nuevaFila.appendChild(columna2);
            }

            if (mode == "companias") {
                const columna3 = document.createElement("td");

                for (let company of elemento.companies) {
                    for (let name in company) {
                        columna3.innerHTML += `${name} <br>`;
                    }
                }

                nuevaFila.appendChild(columna3);
            }

            tabla.appendChild(nuevaFila);
        }
    }
}

control.addEventListener('change', updateTabla);



document.addEventListener('DOMContentLoaded', () => {
    const paisesArray = [];

    for (const continente of companies) {
        for (const pais of continente.countries) {
            paisesArray.push(pais.name);
        }
    }

    paisesArray.sort((a, b) => a.localeCompare(b));

    for (let pais of paisesArray) {
        const nuevaFila = document.createElement("tr");
        const columna1 = document.createElement("td");
        columna1.textContent = pais;
        nuevaFila.appendChild(columna1);
        tabla.appendChild(nuevaFila);
    }
});
