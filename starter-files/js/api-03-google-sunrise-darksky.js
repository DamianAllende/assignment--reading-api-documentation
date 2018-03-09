/*
##### Geocoding
1. What are latitude longitude coordinates of Montreal?
  - https://maps.googleapis.com/maps/api/geocode/json?address=Montreal

2. What time does the sun set in Montreal (based on the Google geocode coordinates)?
  - https://sunrise-sunset.org/api

3. What is the weekly weather forecast in Montreal?
  - https://darksky.net/dev
  - Note: You will have to create an account.

*/


//========================================================================
//  (1) What are latitude longitude coordinates of Montreal?
//
//     - https://developers.google.com/maps/documentation/geocoding/start
//     = NOtE: You don't need an API key for this api
//AIzaSyDHdcCgi75noiEsZziJKhgDFd6eEnXa5Jc
//

const answerElement_apimashup_1 = document.getElementById('apimashup-1')
let locationVar = document.querySelector("#apimashup-1")
let url = "https://maps.googleapis.com/maps/api/geocode/json?address=Montreal"
request
	.get(url)
  	.then(function(data){
  		//console.log(data.body.results[0].geometry.location.lng)
  		let latVar = data.body.results[0].geometry.location.lat
  		let lngVar = data.body.results[0].geometry.location.lng

  		locationVar.textContent = `Latitude ${latVar} y longitude ${lngVar}`

 

  	})



//========================================================================
//  (2) What time does the sun set in Montreal (based on the Google geocode coordinates)?

const answerElement_apimashup_2 = document.getElementById('apimashup-2')
let timeVar = document.querySelector("#apimashup-2")
let url2 = "https://api.sunrise-sunset.org/json?lat=45.5016889&lng=-4.4203400&date=today"
request
	.get(url2)
  	.then(function(data){
  		//console.log(data.body.results)
  		timeVar.textContent = data.body.results.sunset
  	})





//========================================================================
//  (3) What is the weekly weather forecast in Montreal? (look for summary property in 'daily')

const answerElement_apimashup_3 = document.getElementById('apimashup-3')

request
   .get("https://api.darksky.net/forecast/024568525213e39ff4d557e1a90e6358/45.5016889,-73.567256?exclude=currently,minutely,hourly,alerts,flags")
   .then(function (data) {
           
            let dayS= data.body.summary.daily
              
            
            answerElement_apimashup_3.innerHTML = dayS
           
           })

//
