/*
##### TV Maze
https://www.tvmaze.com/api

1. What is the average rating for the show Better Call Saul?
*/
let answer = document.querySelector("#tvmaze-1")
let url = "http://api.tvmaze.com/shows/618"
request
	.get(url)
  	.then(function(data){
  		//console.log(data.body.rating.average)

  		answer.textContent = data.body.rating.average
  		

 

  	})

// 2. When was the premiere date for the 9th season of Friends?

let answer2 = document.querySelector("#tvmaze-2")
let url2 = "http://api.tvmaze.com/shows/431/seasons"
request
	.get(url2)
  	.then(function(data){
  		//console.log(data.body[8].premiereDate)
  		
  		answer2.textContent = data.body[8].premiereDate
  		

 

  	})


// 3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?

let answer3 = document.querySelector("#tvmaze-3")
let url3 = "http://api.tvmaze.com/people/10257/castcredits"
request
	.get(url3)
  	.then(function(data){
  		console.log(data.body.length)
  		
  		answer3.textContent = data.body.length
  		

 

  	})
