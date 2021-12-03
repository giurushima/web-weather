//se hace el form y con un button onclick se guarda el nombre, en la funcion comparar el localstorage array si este tiene
// mismo nombre que se ingresa. PONER INNERHTML para mostrar mensaje de que se cargo
var nombreC;
var arrayCiudad;

function agregarCiudad() {

    nombreC = document.getElementById("nombreCiudad").value;
    arrayCiudad = [];
    for (var i = 0; i < nombreC.length; i++) { 
        // if (nombreC==localStorage[]){}
        arrayCiudad[i] = nombreC[i].value;
        console.log(nombreC[i].value);
}
}

// Agregar ciudad
// Esta página servirá para agregar una ciudad a la lista de ciudades. Debe consistir en un
// formulario con un único campo de texto que permita ingresar el nombre de una ciudad y un
// botón que al ser clickeado guarde la nueva ciudad en el listado de ciudades del
// localStorage. Si se intenta agregar una ciudad que ya está guardada, se debe mostrar un
// cartel de error. En el caso de que la ciudad no se encuentre guardada, agregarla al listado e
// informar el guardado con un mensaje de éxito.
