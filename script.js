var randomButton = document.getElementById("random-button");
var numbersButton = document.getElementById("numbers-button");
var displayText = document.getElementById("content");
var jokesButton = document.getElementById("jokes-button");
var dogBtn = document.getElementById("dog-button");
var catBtn = document.getElementById("cats-button");
var MemesButton = document.getElementById("Memes-button");
var displayText = document.getElementById("content");
//referencing the number api

//referencing the dog pics api
var displayPic = document.getElementById("content");

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
function fetchCat() {
  var url = `https://cat-fact.herokuapp.com`;
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
dogButton.addEventListener("click", function () {
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
// var randomButton = document.getElementById("random-button");
// var numbersButton = document.getElementById("numbers-button");
// var displayText = document.getElementById("content");

numbersButton.addEventListener("click", fetchNumber);

var factsButton = document.getElementById("facts-button");
var displayText = document.getElementById("content");
//move all global vars to the top and all event listeners at bottom
//attaching to a button
function fetchFact() {
  var number = Math.floor(Math.random()*100);
  console.log(number)
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

// console.log(fetchFact)


// function render(data) {
//   var space = document.createElement("p");
//   space.textContent = data;
//   displayText.appendChild(space);
// }


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


//recipes
var foodButton = document.querySelector('#food')

function fetchFood() {
  var url = "http://www.recipepuppy.com/api/";

  fetch(url, { 
    method: 'GET',    
    withCredentials: true,    
    crossorigin: true,    
    mode: 'no-cors',
  })
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
    var recipeList = document.createElement("ul");
    data.results.forEach((recipe) => {
      var recipeItem = document.createElement("li");
      recipeItem.textContent = `${recipe.title} - ${recipe.href}`;
      recipeList.appendChild(recipeItem);
    });
    displayText.appendChild(recipeList);
  }
}

var foodButton = document.getElementById('food-button');

// Add an event listener to the button element
foodButton.addEventListener('click', function() {
  fetchFood();
  console.log('Button was clicked!');
});



// foodButton.addEventListener('click', fetchFood);

//favorite button
// var userInput = document.querySelector('userinput').value
var favoritebutton = document.querySelector("#favorite");

favoritebutton.addEventListener("click", function () {
  //    var userInput = document.querySelector('userinput').value
  var content = document.querySelector("#content");
  // console.log(content.children[1].children[0].src)
  var history = JSON.parse(localStorage.getItem("history")) || []
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
