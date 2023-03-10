var jokesButton = document.getElementById("Jokes-button");
  var displayText = document.getElementById("content");
  // API endpoint URL
function fetchJoke() {

  var url =
    'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
    fetch(url)
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
         Error('Something went wrong');
      }
    })
    .then(data => {
      console.log(data);
      render(data);
    })

// jokesButton.addEventListener("click",fetchJoke)

function render(data) {
  var jokeEl = document.createElement("p");
  jokeEl.textContent = data;
  displayText.appendChild(jokeEl);
}
}

jokesButton.addEventListener('click', fetchJoke)

//------------ numbers api

// //append into the box whatever we what to see (like a image using jquery)


var factsButton = document.getElementById("facts-button");
var displayText = document.getElementById("content");

var number = 100;
var type = 'math';
var url = `http://numbersapi.com/${number}/${type}`;

fetch(url)
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
       Error('Something went wrong');
    }
  })
  .then(data => {
    // console.log(data);
    render(data);
  })


function render(data) {
  var fact = document.createElement('p');
  fact.textContent = data;
  displayText.appendChild(fact); 
}
