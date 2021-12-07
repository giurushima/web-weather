const city = document.getElementById("ciudad").value;
let url = "api.openweathermap.org/data/2.5/weather?q=" +city+ "&appid=3936d0749fdc3124c6566ed26cf11978&units=metric&lang=es";


function changeClima(){
    fetch(url)
    .then((resp) => resp.json())
    .then(function(data){

        //Aca va iria al funcion para mostrar la respuetta
        console.log(data)
    })
    .catch(error =>console.log(error))
}