var jokesButton = document.getElementById("jokes-button");
var displayEl = document.getElementById("displayText");
async function fetchJoke() {
  // API endpoint URL
  var url =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

  // Make API request
  var requestApi = await fetch(url);

  // Get the JSON response
  var response = await requestApi.json();
  var jokeText = "";
  // Return the setup and punchline of the joke
  if (response["type"] === "twopart") {
    return [response["setup"], response["delivery"]];
  } else {
    return [response["joke"], null];
  }
}

// Fetch a random joke from the API
fetchJoke()
  .then(([setup, punchline]) => {
    // Display the setup of the joke
    console.log(setup);

    // If the joke is a two-part joke, display the punchline too
    if (punchline) {
      console.log(punchline);
    }
  })
  .catch((error) => {
    console.error(error);

    var displayJoke = document.createElement("p");
    displayJoke.innerText = jokeText;
    displayEl.innerHTML = "";
    displayEl.append(displayJoke);
  });

jokesButton.addEventListener("click", fetchJoke);


//------------ numbers api
var factsButton = document.getElementById("Facts-button");



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
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });



