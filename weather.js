const button = document.querySelector("button");
const area = document.querySelector("#location")
const lower = document.querySelector(".lower")
const upper = document.querySelector(".upper")


function request(yee){

    fetch(`https://api.weatherapi.com/v1/current.json?key=5999c6f404a84d23930115224231906&q=${yee}`,{mode:"cors"})
    .then(function(response){
        console.log(response.json());
   });
  }

button.addEventListener("click", function(event) {
    event.preventDefault();
    input = area.value
    request(input)
    });



    function request(yee){

      fetch(`https://api.weatherapi.com/v1/current.json?key=5999c6f404a84d23930115224231906&q=${yee}`,{mode:"cors"})
      .then(function(response){
          return response.json();
     })
     .then(function(response){
      upper.textContent =`temprature:${response.current.temp_c} degrees celcius`
     })
    }



  