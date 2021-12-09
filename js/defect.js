//se hace el form y con un button onclick se guarda el nombre, en la funcion comparar el localstorage array si este tiene
// mismo nombre que se ingresa. PONER INNERHTML para mostrar mensaje de que se cargo
var nombreC;
var arrayCiudad = [nombreC];
var i = 0;

function agregarCiudad() {

    // arrayCiudad.push = document.getElementById("nombreCiudad").value;

    // arrayCiudad = localStorage.setItem("Nombre", JSON.stringify(arrayCiudad));

    // localStorage.getItem("Nombre");
    
    localStorage.setItem("data", JSON.stringify(data));

//...
    var data = JSON.parse(localStorage.getItem("data"));


    // if (localStorage.getItem("key") === null) {
    //     // El item no existe
    // }

    // if(arrayCiudad==localStorage.getItem(arrayCiudad)){
    //     console.log("yA esta agregada");
    // }
    //     else{
    //     localStorage.setItem("Nombre", arrayCiudad);
    //     console.log("Se agrego ciudad");
    //     i++;
    // }

    // localStorage.setItem("key", JSON.stringify(array));
    
    // for(var i = 0; i < arrayCiudad; i++) {
        
    // }

    // localStorage.getItem("Nombre");

    // console.log(nombreC);
    
    

    // console.log(localStorage.);

    // arrayCiudad = [];
    // nombreC = localStorage.getItem("Nombre");
    // for (var i = 0; i < nombreC.length; i++) {
    //     // if (nombreC==localStorage[]){}
    //     arrayCiudad[i] = nombreC[i].value;
    //     console.log(arrayCiudad[i].value);
    // }
}

// Agregar ciudad
// Esta página servirá para agregar una ciudad a la lista de ciudades. Debe consistir en un
// formulario con un único campo de texto que permita ingresar el nombre de una ciudad y un
// botón que al ser clickeado guarde la nueva ciudad en el listado de ciudades del
// localStorage. Si se intenta agregar una ciudad que ya está guardada, se debe mostrar un
// cartel de error. En el caso de que la ciudad no se encuentre guardada, agregarla al listado e
// informar el guardado con un mensaje de éxito.