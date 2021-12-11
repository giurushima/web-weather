
let tempMax = document.getElementById("max");
let tempMin = document.getElementById("min");
let temp_ = document.getElementById("degreeNumber");
let feels = document.getElementById("feelsLike");
let humidity = document.getElementById("humidity_");
let status_ = document.getElementById("status"); //seria si esta nublado
let description = document.getElementById("description"); //descripción
let today = new Date(); //crea el objeto de la fecha de hoy
let hour = today.getHours(); //accedo a la hora para la funcion Wallpaper!

function wallpaper(){
    if(hour <= 18 && hour >= 7){
        //Aca hay que cambiar la ruta para que ponga el wallpaper de día
        // es decir que por defecto necesitamos que este puesto el de noche!!
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
    /*con statusValue hay que hacer una funcion que cambie el icono en funcion a lo 
    que devuelva, nublado, soleado, lluvia , etc!*/
    let statusValue = data['weather'][0]['main'];
    let descriptionValue = data['weather'][0]['description'];

    city_.innerHTML = city;
    temp_.innerHTML = tempValue;
    tempMin.innerHTML = tempMinValue;
    tempMax.innerHTML = tempMaxValue;
    feels.innerHTML = feelsValue;
    humidity.innerHTML = humidityValue;
    status_.innerHTML = statusValue;
    description.innerHTML = descriptionValue;
    })

.catch(error =>console.log(error))
}



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
}