//========================================================================
// (1) How many births were there in Iceland's national hospital today?

const answerElement_iceland_1 = document.getElementById('iceland-1')
let url = "https://apis.is/hospital"
request
	.get(url)
  	.then(function(serverRes){
    let apiJsonData = serverRes.body
    //console.log(apiJsonData)
    for(let i = 0; i <  apiJsonData.length; i++){
    	//console.log(apiJsonData[i])
    }
    answerElement_iceland_1.innerHTML = apiJsonData.results[0].birthNumbers
  })



//========================================================================
// (2) How many **arrival** flights are scheduled for today?
let url2 = "http://apis.is/concerts"
let concert = ""
let name = ""
request
	.get(url2)
  	.then(function(data){
  		concert = data.body.results[0].dateOfShow
  		name = data.body.results[0].eventDateName


  		//console.log(data)
  		
const answerElement_iceland_2 = document.getElementById('iceland-2')
answerElement_iceland_2.textContent = name
})


//========================================================================
// (3) What is the next concert event in Iceland?
let url3 = "http://apis.is/flight?language=en&type=arrivals"
let fecha = ""
let vuelo = ""
request
	.get(url3)
  	.then(function(data){
  		console.log(data)
  		vuelo = data.body.results.length
  		console.log(vuelo)
  		

const answerElement_iceland_3 = document.getElementById('iceland-3')
answerElement_iceland_3.textContent = vuelo


})

//
