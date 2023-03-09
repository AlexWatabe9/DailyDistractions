var random = document.getElementById("random-button");

async function fetchJoke() {
  // API endpoint URL
  var url =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

  // Make API request
  var response = await fetch(url);

  // Get the JSON response
  var json_response = await response.json();

  // Return the setup and punchline of the joke
  if (json_response["type"] === "twopart") {
    return [json_response["setup"], json_response["delivery"]];
  } else {
    return [json_response["joke"], null];
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
  });

random.addEventListener("click", fetchJoke);
