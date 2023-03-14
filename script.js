//Global Variables
var randomButton = document.getElementById("random-button");
var numberButton = document.getElementById("numbers-button");
var displayText = document.getElementById("content");
var jokesButton = document.getElementById("jokes-button");
var dogBtn = document.getElementById("dog-button");
var catBtn = document.getElementById("cats-button");
var catFactsBtn = document.getElementById("cat-facts-button");
var MemesButton = document.getElementById("Memes-button");
var displayText = document.getElementById("content");
var resetButton = document.getElementById("reset");
var displayPic = document.getElementById("content");

resetButton.addEventListener("click", function () {
  location.reload();
});

function refresh() {
  location.reload();
}

//Jokes

function fetchJoke() {
  var url =
    "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        Error("Something went wrong");
      }
    })
    .then((data) => {
      console.log(data);
      renderJoke(data);
    });

  // jokesButton.addEventListener("click",fetchJoke)
}
function renderJoke(data) {
  var jokeEl = document.createElement("p");
  if (data.type === "single") {
    jokeEl.textContent = data.joke;
    displayText.appendChild(jokeEl);
  } else {
    //my code goes here
    jokeEl.textContent = data.setup + data.delivery;
    displayText.appendChild(jokeEl);
  }
}

//Memes Button for random memes
function fetchMemes() {
  var url = "https://api.imgflip.com/get_memes";
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        Error("Something isn't right");
      }
    })
    .then((data) => {
      console.log(data);
      var memes = data.data.memes;
      var randomMeme = Math.floor(Math.random() * memes.length);
      var meme = memes[randomMeme];
      displayPic.innerHTML = `<img src="${meme.url}" alt="${meme.name}">`;
    });
}

//Api to fetch cat facts
function fetchCatFacts() {
  var url = "https://catfact.ninja/fact?max_length=140";
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        Error("Something went wrong");
      }
    })
    .then((data) => {
      console.log(data);
      displayPic.innerHTML = `<p>${data.fact}</p>`;
    });
}

//Api to fetch dog pics
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
    dogPics.innerHTML = `<img src="${data.url}"class = 'width' alt="Random dog image">`;
    displayPic.appendChild(dogPics);
  }
}

//------------ numbers api

var numberButton = document.getElementById("number-button");
var displayText = document.getElementById("content");

function fetchNumber() {
  var number = Math.floor(Math.random() * 100);
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
      render(data);
    });
}

function render(data) {
  var facts = document.createElement("p");
  facts.textContent = data;
  displayText.appendChild(facts);
}

//Cat Button for pictures of cats
function fetchCats() {
  var url = "https://cataas.com/cat";

  fetch(url)
    .then((response) => {
      if (response.ok) {
        //Used .blob instead of .json because the API returns an image file, not JSON data.
        //https://developer.mozilla.org/en-US/docs/Web/API/Response/blob
        return response.blob();
      } else {
        Error("Something doesn't work!");
      }
    })
    .then((myBlob) => {
      var imageUrl = URL.createObjectURL(myBlob);
      displayPic.innerHTML = `<img src= "${imageUrl}" alt="Random cat image">`;
    });

  function render(data) {
    var dogPics = document.createElement("p");
    dogPics.innerHTML = `<img src="${data.url}"class = "width" alt="Random dog image">`;
    displayPic.appendChild(dogPics);
  }
}

//recipes
// var foodButton = document.querySelector('#food')

function fetchFood() {
  // var url = "https://www.themealdb.com/api/json/v1/1/categories.php";
  var url = "https://www.themealdb.com/api/json/v1/1/random.php";
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Something isn't working!");
      }
    })
    .then((data) => {
      console.log(data);
      render(data);
    })
    .catch((error) => {
      console.log(error.message);
    });

  function render(data) {
    console.log(data.meals[0]);
    var recipe = data.meals[0];
    var recipeList = document.createElement("ul");

    console.log(recipe);
    var recipeItem = document.createElement("li");

    recipeItem.innerHTML = `<h3> ${recipe.strMeal} </h3><img src="${recipe.strMealThumb} "class = "width" alt= "food image">`;
    recipeList.appendChild(recipeItem);

    displayText.appendChild(recipeList);
  }
}

var foodButton = document.querySelector("#food-button");

//favorite button
// var userInput = document.querySelector('userinput').value
var favoritebutton = document.querySelector("#favorite");

favoritebutton.addEventListener("click", function () {
  //    var userInput = document.querySelector('userinput').value
  var content = document.querySelector("#content");
  // console.log(content.children[1].children[0].src)
  var history = JSON.parse(localStorage.getItem("history")) || [];
  if (content.children[1].children[0] === "IMG") {
    //if we get remove p tag with place holder change first child to index of 0
    console.log("I made it");
    history.push(content.children[1].children[0].src);
  } else {
    history.push(content.children[1].textContent);
  }
  localStorage.setItem("history", JSON.stringify(history));
});

function fetchRandom() {
  var apiList = [
    "fetchJoke",
    "fetchDogs",
    "fetchNumber",
    "fetchMemes",
    "fetchCats",
    "fetchCatFacts",
  ];
  var i = apiList[Math.floor(Math.random() * apiList.length)];
  console.log(i);
  if (i === "fetchJoke") {
    fetchJoke();
  } else if (i === "fetchDogs") {
    fetchDogs();
  } else if (i === "fetchNumber") {
    fetchNumber();
  } else if (i === "fetchMemes") {
    fetchMemes();
  } else if (i === "fetchCats") {
    fetchCats();
  } else if (i === "fetchCatFacts") {
    fetchCatFacts();
  }
}

// factsButton.addEventListener("click", fetchFact);
dogBtn.addEventListener("click", fetchDogs);
randomButton.addEventListener("click", fetchRandom);
jokesButton.addEventListener("click", fetchJoke);
MemesButton.addEventListener("click", fetchMemes);
catBtn.addEventListener("click", fetchCats);
catFactsBtn.addEventListener("click", fetchCatFacts);
foodButton.addEventListener("click", fetchFood);
numberButton.addEventListener("click", fetchNumber);
