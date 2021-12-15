var weather = document.getElementById("weather");
var celcius = document.getElementById("degreeNumber");
let weatherIcon = document.getElementById("weather-icon");
let tempMax = document.getElementById("max");
let tempMin = document.getElementById("min");
let temp_ = document.getElementById("degreeNumber");
let feels = document.getElementById("feelsLike");
let humidity = document.getElementById("humidity_");
let status_ = document.getElementById("status"); //seria si esta nublado
let description = document.getElementById("description"); //descripción
let today = new Date(); //crea el objeto de la fecha de hoy
let hour = today.getHours(); //accedo a la hora para la funcion Wallpaper!

let val;

window.onload = () =>{
    wallpaper();
    mirar();
}

function wallpaper(){
    if(hour <= 18 && hour >= 7){
        container.classList.remove("night");
        container.classList.add("day");
    }
    else{
        container.classList.remove("day");
        container.classList.add("night");
        weather.style.color = 'white';
        celcius.style.color = 'white';
        description.style.color = 'white';
    }
}

function changeClima(){

    let city = document.getElementById("ciudad").value;
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=3936d0749fdc3124c6566ed26cf11978&units=metric&lang=es";

    fetch(url)
    .then((response) => response.json())
    .then(data => {

    let tempValue = data['main']['temp'];
    let tempMinValue = data['main']['temp_min'];
    let tempMaxValue = data['main']['temp_max'];
    let feelsValue = data['main']['feels_like'];
    let humidityValue = data['main']['humidity'];
    let statusValue = data['weather'][0]['main'];
    let icon = data['weather'][0]['icon'];
    let descriptionValue = data['weather'][0]['description'];

    weatherIcon.innerHTML = `<img src='../icons/${icon}.png'></img>`;
    temp_.innerHTML = tempValue + " °C";
    tempMin.innerHTML = tempMinValue + " °C";
    tempMax.innerHTML = tempMaxValue + " °C";
    feels.innerHTML = feelsValue + " °C";
    humidity.innerHTML = humidityValue + " %";
    status_.innerHTML = statusValue;
    description.innerHTML = descriptionValue;
    weather.style.display = "block";
    })

.catch(error =>alert("Error. Ciudad no encontrada"))

}

function agregarCiudad(){

    //obtenemos datos del input "nombreCiudad" que tenemos 
    // y se lo asignamos a nuevosC
    var nuevosC = document.getElementById("nombreCiudad").value;

    // Si el input esta vacio, se pide que se ingrese alguna ciudad
    if(nuevosC!=0){
        //Si no hay nada guardado al principio 
        //entonces guarda/comienza un array vacio
        if(localStorage.getItem('Ciudad') == null){
            //Nombre de la clave: Ciudad
            //El valor que le pasa a la clave es un array vacio
            //se guarda/setea el array vacio con la clave 'Ciudad'
            localStorage.setItem('Ciudad', "[]");
        } 
        //setitem: guarda informacion
        //getitem: obtiene informacion
        // Se crea la variable viejosC y se condiciona para que 
        // esta sea la clave 'Ciudad' (JSON.parse convierte a texto)
        var viejosC = JSON.parse(localStorage.getItem('Ciudad'));

        //Para realizar la validacion de que la ciudad ya fue ingresada o no
        //creamos la variable val, con el includes observamos dentro de viejosC
        //si existe el elemento nuevosC y le asignamos val
        val = viejosC.includes(nuevosC);

        //Si val es falso es porque la ciudad no esta agregada en el array.
        if(val == false){
            //Obtenemos los datos antiguos de nuevosC y se los cargamos 
            //con .push al array viejosC 
            viejosC.push(nuevosC);
            //Seteamos/guardamos el localStorage con la clave 'Ciudad', 
            // y con el JSON.stringify convertimos los valores(ciudades del array)  
            // que tenemos en viejosC a una cadena de texto
            localStorage.setItem('Ciudad', JSON.stringify(viejosC));
        } else{
            //En caso de que val es True, es decir, si la ciudad ya esta ingresada
            //alertamos al usuario de que la ciudad ya fue ingresada
            alert("Ciudad ya ingresada");
        }
    } else {
        //En caso de que el valor de input de nuevosC es vacio
        //alertamos al usuario de que ingrese la ciudad correctamente 
        alert("Ingrese una ciudad");
    }
} 

function mirar(){

    //Obtenemos la clave 'Ciudad' con sus respectivos valores
    //(distintas ciudades) y se lo asignamos a ciudades
    var ciudades = JSON.parse(localStorage.getItem("Ciudad"));

    //Recorremos ciudades con el forEach(se ejecuta una vez por cada elemento del array
    // en este caso: ciudades).
    ciudades.forEach(array => {
        //Creamos una variable c, en esta le asignaremos para que cree un elemento
        // de 'option'
        var c = document.createElement('option');
        //A la variable c le vamos asignando ciudad por ciudad
        //de lo que va leyendo
        c.text = array;
        //Al id ciudad le agregamos ciudad por ciudad que tengamos en el array
        //con el appendChild(agregamos nodos)
        ciudad.appendChild(c);
    })
}