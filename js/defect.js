//se hace el form y con un button onclick se guarda el nombre, en la funcion comparar el localstorage array si este tiene
// mismo nombre que se ingresa. PONER INNERHTML para mostrar mensaje de que se cargo


// var elemento = document.querySelector("#nombreCiudad");

function agregarCiudad() {

    var data = document.getElementById("nombreCiudad").value;
    
    if(localStorage.getItem('Ciudad') == null || localStorage.getItem('Ciudad') == data){
        for(var i = 0; i < olddata.length; i++) {
            console.log(olddata[i]);
        }
        localStorage.setItem('Ciudad', '[]');
        ciudad.options.add(new Option('Ciudad', olddata));
    }

    var olddata = JSON.parse(localStorage.getItem('Ciudad'));
    olddata.push(data);

    localStorage.setItem('Ciudad', JSON.stringify(olddata));



    // if(arrayCiudad==0){
    // console.log("s");
    //     }else{
    //         for(var i = 0; i < arrayCiudad.length; i++) {
    //             arrayCiudad[i] = document.getElementById("nombreCiudad").value;
    //         }
    //     }

    // localStorage.setItem("Nombre", JSON.stringify(arrayCiudad));

    // localStorage.getItem("Nombre", arrayCiudad);


    // var miObjeto = {'name': nombreC}

    // localStorage.setItem('datos', JSON.stringify(miObjeto));
    // var guardado = localStorage.getItem('datos');

    // console.log('objetoObtenido: ', JSON.parse(guardado));
//     Claves para este enunciado
// ● Antes de guardar la ciudad debe validarse que la misma no esté incluida en el listado
// de ciudades.
// ● Para consultar el valor de un ítem en localStorage usar la función
// localStorage.getItem("item");
// ● Para editar el valor de un ítem en localStorage usar la función
// localStorage.setItem("item", nuevoValor);
// ● El método setItem de localStorage sobrescribe completamente el valor de la variable,
// por lo que si tenemos un arreglo guardado en localStorage y queremos agregar un
// item al arreglo, debemos usar la función setItem y pasarle en el parámetro de valor
// el arreglo completo con la nueva opción agregada.


    // for(var i = 0; i < arrayCiudad.length; i++) {
    //     var opt[i] = arrayCiudad[i];
            
    // }
    
//     localStorage.setItem("data", JSON.stringify(nombreC));

// //...
//     var nombreC = JSON.parse(localStorage.getItem("Nombre"));


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