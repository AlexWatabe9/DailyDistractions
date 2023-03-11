var randomButton = document.getElementById("random-button");
var factsButton = document.getElementById("facts-button");
var jokesButton = document.getElementById("jokes-button");
var dogsButton = document.getElementById("dogs-button");
var catsButton = document.getElementById("cats-button");
var MemesButton = document.getElementById("Memes-button");
var displayText = document.getElementById("content");
//referencing the number api
var dogBtn = document.getElementById("dog-button");
//referencing the dog pics api
var displayPic = document.getElementById("content");
//referencing the dog pics api

function fetchJoke() {

  var url =
    'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
         Error('Something went wrong');
      }
    })
    .then(data => {
      console.log(data);
      renderJoke(data);
    })

// jokesButton.addEventListener("click",fetchJoke)

}
function renderJoke(data) {
  var jokeEl = document.createElement("p");
  if (data.type === 'single'){
    jokeEl.textContent = data.joke;
  displayText.appendChild(jokeEl);

  }
  else{
    //my code goes here
    jokeEl.textContent = data.setup + '' + data.delivery;
  displayText.appendChild(jokeEl);
  }
  
  
}
function fetchCat() {
  var url = `https://cat-fact.herokuapp.com`;
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
         Error('Something went wrong');
      }
    })
    .then(data => {
      console.log(data);
      renderJoke(data);
    })

// jokesButton.addEventListener("click",fetchJoke)

}
function renderJoke(data) {
  var jokeEl = document.createElement("p");
  if (data.type === 'single'){
    jokeEl.textContent = data.joke;
  displayText.appendChild(jokeEl);

  }
  else{
    //my code goes here
    jokeEl.textContent = data.setup + data.delivery;
  displayText.appendChild(jokeEl);
  }
}
factsButton.addEventListener("click", fetchFact);

function fetchDogs() {
  var url = "https://random.dog/woof.json?ref=apilist.fun";

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        Error("Something isn't working!");
      }
    })
    .then((data) => {
      console.log(data);
      render(data);
    });

  function render(data) {
    var dogPics = document.createElement("p");
    dogPics.innerHTML = `<img src="${data.url}" alt="Random dog image">`;
    displayPic.appendChild(dogPics);
  }
}


//------------ numbers api

// //append into the box whatever we what to see (like a image using jquery)

var factsButton = document.getElementById("facts-button");
var displayText = document.getElementById("content");
//move all global vars to the top and all event listeners at bottom
//attaching to a button
function fetchFact() {
  var number = 100;
  var type = "math";
  var url = `http://numbersapi.com/${number}/${type}`;

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.text();
      } else {
        Error("Something went wrong");
      }
    })
    .then((data) => {
      console.log(data);
      render(data);
    });

  function render(data) {
    var facts = document.createElement("p");
    facts.textContent = data;
    displayText.appendChild(facts);
  }
}
factsButton.addEventListener("click", fetchFact);

function fetchDogs() {
  var url = "https://random.dog/woof.json?ref=apilist.fun";

  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        Error("Something isn't working!");
      }
    })
    .then((data) => {
      console.log(data);
      render(data);
    });

  function render(data) {
    var dogPics = document.createElement("p");
    dogPics.innerHTML = `<img src="${data.url}" alt="Random dog image">`;
    displayPic.appendChild(dogPics);
  }
}
dogBtn.addEventListener("click", fetchDogs);


jokesButton.addEventListener("click", fetchJoke);
