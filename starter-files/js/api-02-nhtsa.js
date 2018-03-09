
// ##### National Highway Transit Safety Administration
// https://vpic.nhtsa.dot.gov/api/

// 1. How many types of Chevrolet models are registered with the NHTSA?
let url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/467?format=json"

let result = ""
let model = document.querySelector("#nhtsa-1")
request
	.get(url)
  	.then(function(data){
  		//console.log(data)
  		result = data.body.Results.length
  		model.textContent = result

  	})

// 2. What are the vehicle types that Nissan has?

let url2 = "https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMakeId/478?format=json"

let result2 = ""
let tipos = document.querySelector("#nhtsa-2")
request
	.get(url2)
  	.then(function(data){
  		//console.log(data)
  		result2 = data.body.Results.length
  		tipos.textContent = result2

  	})

// 3. What are the types of models that exist for Toyota trucks in 2017?

let url3 = "https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/toyota/modelyear/2017/vehicleType/truck?format=json"

let result3 = ""
let acount = ""
let truk = document.querySelector("#nhtsa-3")
request
	.get(url3)
  	.then(function(data){
  		console.log(data)
  		result3 = data.body.Results
  		result3.forEach(function(element){
  			acount += element.Model_Name
  		})
  		truk.textContent = acount

  	})

