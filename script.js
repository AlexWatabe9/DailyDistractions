//Global Variables
var randomButton = document.getElementById("random-button");
var numberButton = document.getElementById("number-button");
var displayText = document.getElementById("content");
var jokesButton = document.getElementById("jokes-button");
var dogBtn = document.getElementById("dog-button");
var catBtn = document.getElementById("cats-button");
var catFactsBtn = document.getElementById("cat-facts-button");
var MemesButton = document.getElementById("Memes-button");
var displayText = document.getElementById("content");
var resetButton = document.getElementById("reset");
var displayPic = document.getElementById("content");
var likeButton = document.getElementById("like");
var favoritebutton = document.querySelector("#favorite");

//Reset Button to refresh the page, clearing the content

resetButton.addEventListener("click", function () {
  location.reload();
});

function refresh() {
  location.reload();
}

//API to fetch Jokes

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

//API to fetch meme templates

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
      var paragraph = document.createElement("p");
      paragraph.innerHTML = `<img src="${meme.url}" class="width" alt="${meme.name}">`;
      displayPic.appendChild(paragraph);
    });
}

//API to fetch cat facts

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
      render(data);
    });

  function render(data) {
    var catFacts = document.createElement("p");
    catFacts.innerHTML = `<p>${data.fact}</p>`;
    displayPic.appendChild(catFacts);
  }
}

//API to fetch dog pics

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

//API to fetch number facts

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

//Api to fetch cat pics

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
      render(imageUrl);
    });

  function render(imageUrl) {
    var paragraph = document.createElement("p");
    paragraph.innerHTML = `<img src= "${imageUrl}" class="width" alt="Random cat image">`;
    displayPic.appendChild(paragraph);
  }
}

//recipes

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

//Function to save liked content to local storage

favoritebutton.addEventListener("click", function () {
  var content = document.querySelector("#content");
  var history = JSON.parse(localStorage.getItem("history")) || [];
  var saveContent = content.children[1].children[0];
  var otherContent = content.children[1];
  if (typeof saveContent !== "undefined" && saveContent.tagName === "IMG") {
    //if we get remove p tag with place holder change first child to index of 0
    // console.log("I made it");
    history.push(content.children[1].children[0].src);
  } else {
    history.push(content.children[1].textContent);
  }
  localStorage.setItem("history", JSON.stringify(history));
});

function checkUrl(string) {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
}

//Function to retrieve favorited content from local storage

function getLikes() {
  var content = document.querySelector("#content");
  var myLikes = JSON.parse(localStorage.getItem("history"));
  for (var i = 0; i < myLikes.length; i++) {
    if (checkUrl(myLikes[i])) {
      var myImage = document.createElement("img");
      myImage.src = myLikes[i];
      // set the source of the image href = i
      displayText.appendChild(myImage);
    } else {
      // build paragraph tag and set content
      var like = document.createElement("p");
      like.textContent = myLikes[i];
      displayText.appendChild(like);
    }
  }

  render(localStorage);
}

//Function for the Random option that chooses from all of the categories

function fetchRandom() {
  var apiList = [
    "fetchJoke",
    "fetchDogs",
    "fetchFact",
    "fetchCatFacts",
    "fetchCats",
  ];
  var i = apiList[Math.floor(Math.random() * apiList.length)];
  console.log(i);
  if (i === "fetchJoke") {
    fetchJoke();
  } else if (i === "fetchDogs") {
    fetchDogs();
  } else if (i === "fetchNumber") {
    fetchNumber();
  } else if (i === "fetchCatFacts") fetchCatFacts();
  else if (i === "fetchCats") fetchCats();
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
likeButton.addEventListener("click", getLikes);
