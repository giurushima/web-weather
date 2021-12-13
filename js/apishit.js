
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

.catch(error =>console.log(error))
}

function agregarCiudad(){

    // alert("Entro");

    // let nuevosC = document.getElementById("nombreCiudad").value;
    // //localStorage.setItem('Ciudad', JSON);

    // console.log(arrayCity);
    // alert("antes")
    // if(nuevosC != 0){
    //     val = arrayCity.includes(nuevosC);
    //     console.log(val);

    //     alert("deps");
    //     if(val == false){

    //         localStorage.setItem('Ciudad', '[]');

    //         arrayCity = JSON.parse(localStorage.getItem('Ciudad'));
    
    //         // mirar(nuevosC);

    //         localStorage.setItem('Ciudad', JSON.stringify(arrayCity));

    //         alert("deberia haber agrgado la city");

    //     }else{
    //         alert("Ciudad ya ingresada Cachorro!");
    //     }
    //     alert("despues if");
    // }else{
    //     alert("agrega algo pichon");
    // }

    // debugger;

    // let nuevosC = document.getElementById("nombreCiudad").value;
    // viejosC = JSON.parse(localStorage.getItem('Ciudad'));

    // val = viejosC.includes(nuevosC);

    // if(val == false){
    //     viejosC.push(nuevosC);
    //     localStorage.setItem('Ciudad', JSON.stringify(viejosC));
        
    //     mirar();

    // }else{
    //     alert("Ciudad ya ingresada Cachorro!");
    // }

    //obtenemos los datos del input
    var nuevosC = document.getElementById("nombreCiudad").value;


    // si no hay nada guardado al principio entonces guarda un array vacio
    if(nuevosC!=0){
        if(localStorage.getItem('Ciudad') == null){
            localStorage.setItem('Ciudad', "[]");
        } 
    //     val = viejosC.includes(nuevosC);
    //     alert("PASO");

    // if(val == false){
        var viejosC = JSON.parse(localStorage.getItem('Ciudad'));
    
        
        viejosC.push(nuevosC);
        console.log(viejosC);

        localStorage.setItem('Ciudad', JSON.stringify(viejosC));

    
}
    // obtenemos los datos antiguos y se los pegamos al nuevo array (push) 
    

    //guardamos los datos antiguos + los nuevos en el localstorage
    

    // Puedes obtener el array de localstorage, lo parseas y haces un push y luego lo vuelves a meter en el localstorage
} 

function mirar(){
    // document.getElementById("ciudad").innerHTML = JSON.parse(localStorage.getItem("Ciudad")); PARA MOSTRAR
    // Cuando transformas el json en array, tenes que recorrer el array resultante y
    // agregar cada elemento al select como una option diferente

    var ciudades = JSON.parse(localStorage.getItem("Ciudad"));

    ciudades.forEach(array => {
        var c = document.createElement('option');
        c.value = array;
        c.text = array;
        ciudad.appendChild(c);
    })
}


    //  //obtenemos los datos del input
    //  var nuevosC = document.getElementById("nombreCiudad").value;
    //  var k = 0;

    //  // si no hay nada guardado al principio entonces guarda un array vacio
    //  if(localStorage.getItem('Ciudad') == null){
    //      localStorage.setItem('Ciudad', "[]");
    //  } 
    //  // else {
    //  //     localStorage.removeItem('Ciudad', "");
    //  // }

    //  // obtenemos los datos antiguos y se los pegamos al nuevo array (push) 
    //  var viejosC = JSON.parse(localStorage.getItem('Ciudad'));
    //  viejosC.push(nuevosC);

    //  //guardamos los datos antiguos + los nuevos en el localstorage
    //  localStorage.setItem('Ciudad', JSON.stringify(viejosC));