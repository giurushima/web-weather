function changeClima(){

    let city = document.getElementById("ciudad").value;
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=3936d0749fdc3124c6566ed26cf11978&units=metric&lang=es";

    fetch(url)
    .then((response) => response.json())
    .then(data => console.log(data))

        //Aca va iria al funcion para mostrar la respuett)

.catch(error =>console.log(error))
}