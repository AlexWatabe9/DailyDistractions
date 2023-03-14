var randomButton = document.getElementById("random-button");
var factsButton = document.getElementById("facts-button");
var jokesButton = document.getElementById("jokes-button");
var dogBtn = document.getElementById("dog-button");
var catBtn = document.getElementById("cats-button");
var catFactsBtn = document.getElementById("cat-facts-button");
var MemesButton = document.getElementById("Memes-button");
var displayText = document.getElementById("content");
var displayPic = document.getElementById("content");

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

//Cat Facts
function fetchCatFacts() {
  var url = `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`;
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
    catFacts.textContent = data.text;
    displayText.appendChild(catFacts);
  }
}

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

function fetchFact() {
  var number = Math.floor(Math.random() * 100);
  console.log(number);
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
      // console.log(data);
      render(data);
    });

  function render(data) {
    var facts = document.createElement("p");
    facts.textContent = data;
    displayText.appendChild(facts);
  }
}

// function likeButton () {
// localStorage.setItem('like')
// console.log(hello)
// }

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
}

//favorite button
// var userInput = document.querySelector('userinput').value
var favoritebutton = document.querySelector("#favorite");

favoritebutton.addEventListener("click", function () {
  //    var userInput = document.querySelector('userinput').value
  var content = document.querySelector("#content");
  // console.log(content.children[1].children[0].src)
  var history = JSON.parse(localStorage.getItem("history")) || [];
  if (content.children[1].children[0].tagName === "IMG") {
    //if we get remove p tag with place holder change first child to index of 0
    console.log("I made it");
    history.push(content.children[1].children[0].src);
  } else {
    history.push(content.children[1].textContent);
  }
  localStorage.setItem("history", JSON.stringify(history));
});

factsButton.addEventListener("click", fetchFact);
dogBtn.addEventListener("click", fetchDogs);
jokesButton.addEventListener("click", fetchJoke);
catBtn.addEventListener("click", fetchCats);
catFactsBtn.addEventListener("click", fetchCatFacts);
