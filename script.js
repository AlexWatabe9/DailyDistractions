function fetchJoke() {
  // API URL
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

// //append into the box whatever we what to see (like a image using jquery)


var factsButton = document.getElementById("Facts-button");
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


// factsButton.addEventListener("click", () => {
//   // code to execute when button is clicked
// });



