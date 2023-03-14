var randomButton = document.getElementById("random-button");
var numberButton = document.getElementById("numbers-button");
var displayText = document.getElementById("content");
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
  var displayPic = document.getElementById('dogs');
  
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
  }
  
  function render(data) {
    var dogPics = document.createElement("p");
    dogPics.innerHTML = `<img src="${data.url}" alt="Random dog image">`;
    displayPic.appendChild(dogPics);
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

numberButton.addEventListener("click", fetchNumber);


// var numberButton = document.querySelector('#number-button');

// // Add an event listener to the button element
// numberButton.addEventListener('click', function() {
//   fetchNumber();
//   console.log('Button was clicked!');
// });


// console.log(fetchFact)


// function render(data) {
//   var space = document.createElement("p");
//   space.textContent = data;
//   displayText.appendChild(space);
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


//recipes
// var foodButton = document.querySelector('#food')

function fetchFood() {
  var url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

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

var foodButton = document.querySelector('#food-button');

// Add an event listener to the button element
foodButton.addEventListener('click', function() {
  fetchFood();
  console.log('Button was clicked!');
});



// foodButton.addEventListener('click', fetchFood);

//space
var disney = document.getElementById('disney');

function fetchDisney() {
  var url = "https://api.disneyapi.dev/characters";

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
}

var disneyButton = document.querySelector('#disney-button');
// Add an event listener to the button element
disneyButton.addEventListener('click', function() {
  fetchDisney();
  console.log('Button was clicked!');
});



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

// factsButton.addEventListener("click", fetchFact);
dogBtn.addEventListener("click", fetchDogs);
jokesButton.addEventListener("click", fetchJoke);
catBtn.addEventListener("click", fetchCats);
catFactsBtn.addEventListener("click", fetchCatFacts);
