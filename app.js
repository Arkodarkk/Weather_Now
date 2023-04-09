// Déclaration variables icônes
let townIcon = document.querySelector(".bx-building-house");
let thermIcon = document.querySelector(".bxs-thermometer");
let dropletIcon = document.querySelector(".bxs-droplet");
let windIcon = document.querySelector(".bx-wind");

// Déclaration variables boxes
let boxTown = document.getElementById("box1");
let boxTherm = document.getElementById("box2");
let boxDroplet = document.getElementById("box3");
let boxWind = document.getElementById("box4");

// Déclaration tableau icônes
let iconsArray = [townIcon, thermIcon, dropletIcon, windIcon];

// Déclaration tableau grid boxes
let boxesArray = [boxTown, boxTherm, boxDroplet, boxWind];

// Déclencher l'animation "tada" sur l'icône au survol de sa box
for (let i = 0; i < boxesArray.length; i ++) {
    boxesArray[i].addEventListener("mouseenter", function() {
        iconsArray[i].classList.add("bx-tada");
    });
    boxesArray[i].addEventListener("mouseleave", function() {
        iconsArray[i].classList.remove("bx-tada");
    });
};

// Déclaration de la clé API
const APIKEY = "4d8a620b1f5a1c8898b8973217a425c5";

// Fonction d'appel à l'API avec la ville en paramètre
let apiCall = function (city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

    fetch(url)
        .then((response) => 
            response.json()
        .then((data) => {
// Intégration des données dans leurs box respectives et ajout d'un délai pour permettre un affichage plus smooth
            document.querySelector("#box1>p").style.opacity = 0;
            setTimeout(() => {
                document.querySelector("#box1>p").innerHTML = data.name;
                document.querySelector("#box1>p").style.opacity = 1;
            }, 300);
            document.querySelector("#box2>p").style.opacity = 0;
            setTimeout(() => {
                document.querySelector("#box2>p").innerHTML = `${Math.round(data.main.temp * 10) / 10} °C`;
                document.querySelector("#box2>p").style.opacity = 1;
            }, 300);
            document.querySelector("#box3>p").style.opacity = 0;
            setTimeout(() => {
                document.querySelector("#box3>p").innerHTML = `${data.main.humidity} %`;
                document.querySelector("#box3>p").style.opacity = 1;
            }, 300);
            document.querySelector("#box4>p").style.opacity = 0;
            setTimeout(() => {
                document.querySelector("#box4>p").innerHTML = `${Math.round(data.wind.speed * 3.6)} km/h`;
                document.querySelector("#box4>p").style.opacity = 1;
            }, 300);
//Récupération des icônes et descriptions liées aux conditions climatiques ciblées par la recherche
            if (data.weather[0].icon == "01d" || data.weather[0].icon == "01n") {
                document.querySelector("#weather-icon").src = "https://openweathermap.org/img/wn/01d@2x.png"
                document.querySelector("#weather-desc").innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
            } else if (data.weather[0].icon == "02d" || data.weather[0].icon == "02n") {
                document.querySelector("#weather-icon").src = "https://openweathermap.org/img/wn/02d@2x.png"
                document.querySelector("#weather-desc").innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
            } else if (data.weather[0].icon == "03d" || data.weather[0].icon == "03n") {
                document.querySelector("#weather-icon").src = "https://openweathermap.org/img/wn/03d@2x.png"
                document.querySelector("#weather-desc").innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
            } else if (data.weather[0].icon == "04d" || data.weather[0].icon == "04n") {
                document.querySelector("#weather-icon").src = "https://openweathermap.org/img/wn/04d@2x.png"
                document.querySelector("#weather-desc").innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
            } else if (data.weather[0].icon == "05d" || data.weather[0].icon == "05n") {
                document.querySelector("#weather-icon").src = "https://openweathermap.org/img/wn/05d@2x.png"
                document.querySelector("#weather-desc").innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
            } else if (data.weather[0].icon == "06d" || data.weather[0].icon == "06n") {
                document.querySelector("#weather-icon").src = "https://openweathermap.org/img/wn/06d@2x.png"
                document.querySelector("#weather-desc").innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
            } else if (data.weather[0].icon == "07d" || data.weather[0].icon == "07n") {
                document.querySelector("#weather-icon").src = "https://openweathermap.org/img/wn/07d@2x.png"
                document.querySelector("#weather-desc").innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
            } else if (data.weather[0].icon == "08d" || data.weather[0].icon == "08n") {
                document.querySelector("#weather-icon").src = "https://openweathermap.org/img/wn/08d@2x.png"
                document.querySelector("#weather-desc").innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
            } else if (data.weather[0].icon == "09d" || data.weather[0].icon == "09n") {
                document.querySelector("#weather-icon").src = "https://openweathermap.org/img/wn/09d@2x.png"
                document.querySelector("#weather-desc").innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
            } else if (data.weather[0].icon == "10d" || data.weather[0].icon == "10n") {
                document.querySelector("#weather-icon").src = "https://openweathermap.org/img/wn/10d@2x.png"
                document.querySelector("#weather-desc").innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
            } else if (data.weather[0].icon == "11d" || data.weather[0].icon == "11n") {
                document.querySelector("#weather-icon").src = "https://openweathermap.org/img/wn/11d@2x.png"
                document.querySelector("#weather-desc").innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
            } else if (data.weather[0].icon == "13d" || data.weather[0].icon == "13n") {
                document.querySelector("#weather-icon").src = "https://openweathermap.org/img/wn/13d@2x.png"
                document.querySelector("#weather-desc").innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
            } else if (data.weather[0].icon == "50d" || data.weather[0].icon == "50n") {
                document.querySelector("#weather-icon").src = "https://openweathermap.org/img/wn/50d@2x.png"
                document.querySelector("#weather-desc").innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
            }
        }) 
        ).catch(err => {
            alert("Ville introuvable.\nVeuillez vérifier votre saisie");
            location.reload();
        })
    };

// Appel par défaut au chargement de la page
apiCall("Bagnols-sur-Cèze");

// Appel lors de la soumission du formulaire
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    let ville = document.querySelector("#searchtown").value;
    apiCall(ville);
});
