const control = document.forms.controlador;
const tabla = document.querySelector('tabla tbody');
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
    if(e.target.id == 'paises') {
        mode = "paises";
    }else if(e.target.id == 'num'){
        mode = "num";
    }else if(e.target.id == 'companias'){
        mode = "companias";
    }
})

/*Obtencion de datos*/

function getDatos(continente){
    for(const elemento of companies){
        if(elemento.continent == control.continente.value){
            return elemento;

        }
    }

    return null;
}

/*Imprimir datos*/
for(const elemento of companies) {

    if(mode == "companias" || mode == "num"){

    }

    if(mode == "companias"){

    }
}

