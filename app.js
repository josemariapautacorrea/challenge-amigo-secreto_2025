// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];
let amigos1 = [];

function agregarAmigo() {
    
    // Funcion principal para agregar los nombres de amigos.

    const input = document.getElementById("amigo");
    nombre = input.value.trim();
    if (nombreVacio(nombre) === true && nombreRepetido(nombre) === false) {
        amigos.push(nombre);
        //actualizarLista();
        input.value = "";
        console.log("Agregado...");
        console.log(amigos);
    }
    leerAmigos(amigos);
    console.log(amigos);
    console.log(amigos1);
    agregarElementoLista();    
}

function validarTexto(input) { 

    // Esta funcion reemplaza los caracteres no aceptados (Numeros y caracteres especiales) 
    // reemplazandolos por ''.

    input.value = input.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ ]/g, '');
}

function nombreVacio(nombre) {

    // Verifica si no se ha ingresado ningun valor, es decir al tratar de guardar un valor vacio.

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return false;
    } else {
        return true;
    }
}

function nombreRepetido(nombre) {

    // Busca nombres repetidos en el arreglo amigos, y presenta una alerta 
    // cuando ya esta ingresado el nombre.
    // (No permite que se ingrese mas de una vez el mismo nombre de un amigo.)

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        //
        nombre = "";
        //
        return true ;
    } else {
        return false;
    }
}

function leerAmigos(amigos) {

    // Lee cada uno de los elementos de el arreglo "amigos", y le aplica la funcion
    // encontrarEspacio a cada uno de sus elementos.
    amigos1 = [];
    let i = 0;
    let lenAmigos = 0;
    lenAmigos = amigos.length;
    for (i = 0; i < lenAmigos; i++) {
        amigos1.push(encontrarEspacio(amigos[i]));
    }
} 

function encontrarEspacio(nombre) {

    // Transforma la primera letra de la primera de la cadena en mayuscula, y tambien
    // de la palabra despues de un espacio.
    // Ejemplo:  
    //      juan andres -->  Juan Andres
    //      juan        -->  Juan

    let nombre1 = "";
    let nextUpper = false;
    let caracter = "";
    let carNum = 0;
    let cadLen = nombre.length;

    if (cadLen > 0) {
        for (carNum = 0; carNum < cadLen; carNum++) {
        
            //caracter = CharAt(nombre(carNum));
            caracter = nombre[carNum];
            console.log(caracter," carNum ",carNum);

            if (carNum === 0 || nextUpper === true) {
                nombre1 = nombre1 + caracter.toUpperCase();
                nextUpper = false;
            }else {
                nombre1 = nombre1 + caracter.toLowerCase();
                if (caracter === " ") {
                    nextUpper = true;
                }
            }
            console.log(nombre1);
        }
    }
    console.log(nombre1);
    return nombre1;
}

function agregarElementoLista() {

    // Agrega nombres a la lista que se presenta en pantalla

    // Obtener el elemento <ul> por su id
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "" // Borra el contenido de la lista

  // Recorrer el array y agregar cada elemento como <li>
    
    amigos1.forEach(item => {
        const li = document.createElement("li"); // Crear un nuevo <li>
        li.textContent = item; // Asignar el texto del elemento
        lista.appendChild(li); // Agregar <li> a la lista <ul>
    });
}

function sortearAmigo() {

    // Obtener el amigo ganador

    const lista = document.getElementById("resultado");
    lista.innerHTML = "" // Borra el contenido de la lista

    const li = document.createElement("li"); // Crear un nuevo <li>
    li.textContent = obtenerGanador(); // Asignar el texto del elemento
    lista.appendChild(li); // Agregar <li> a la lista <ul>

}

function obtenerGanador() {

    // Ejecutar el sorteo del amigo mediante la funcion random.

    const indice = Math.floor(Math.random() * amigos1.length);
    return amigos1[indice];
}