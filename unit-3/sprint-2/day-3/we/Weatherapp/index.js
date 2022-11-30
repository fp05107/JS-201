let key = '902d7a5b69d0a13b7f3683a15418b313'
let container = document.getElementById("container")
let map = document.getElementById("gmap_canvas");
async function getWeather() {
    try {
        let city = document.getElementById('city').value;
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
        let data = await res.json();
        appendData(data)
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

function appendData(data){
    container.innerHTML=''
    let name = document.createElement('p');
    name.innerText = `Name - ${data.name}`;
    let temp = document.createElement("p");
    temp.innerText = `Temp - ${data.main.temp}`;
    let feels_like = document.createElement("p");
    feels_like.innerText = `Feels_like - ${data.main.feels_like}`
    let temp_max = document.createElement("p");
    temp_max.innerText = `Temp_max - ${data.main.temp_max}`
    let temp_min = document.createElement("p");
    temp_min.innerText = `Temp_min - ${data.main.temp_min}`
    let humidity = document.createElement("p");
    humidity.innerText = `Humidity - ${data.main.humidity}`
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
    container.append(name,temp,feels_like,temp_max,temp_min,humidity)

}
