var jokesButton = document.getElementById("jokes-button");
var displayEl = document.getElementById("displayText");

function fetchJoke() {
  // API endpoint URL
  var url =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

  // Make API request
  var requestApi = fetch(url);

  // Get the JSON response
  var response = requestApi.json();

  // Return the setup and punchline of the joke
  if (response["type"] === "twopart") {
    return [response["setup"], response["delivery"]];
  } else {
    return [response["joke"], null];
  }
}

jokesButton.addEventListener("click",fetchJoke)

function render(data) {
  var jokeEl = document.createElement("p");
  jokeEl.textContent = data;

  if (punchline) {
    var punchlineEl = document.createElement("p");
    punchlineEl.textContent = punchline;
    displayEl.appendChild(punchlineEl);
  }

  displayEl.appendChild(jokeEl);
}



//------------ numbers api
// var factsButton = document.getElementById("Facts-button");
// //append into the box whatever we what to see (like a image using jquery)

var factsButton = document.getElementById("Facts-button");
var displayText = document.getElementById("displayText");

var number = 42;
var type = 'math';
var url = `http://numbersapi.com/${number}/${type}`;

fetch(url)
  .then(response => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Something went wrong');
    }
  })
  .then(data => {
    // console.log(data);
    render(data);
  })
  .catch(error => {
    console.error(error);
  });

function render(data) {
  var fact = document.createElement('p');
  fact.textContent = data;
  displayText.appendChild(fact);
}





