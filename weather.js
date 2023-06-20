fetch("https://api.weatherapi.com/v1/current.json?key=5999c6f404a84d23930115224231906&q=london",{mode:"cors"})
.then(function(response){
    console.log(response.json());
});