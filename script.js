var randomButton = document.getElementById("random-button");
var numbersButton = document.getElementById("numbers-button");
var displayText = document.getElementById("content");
var jokesButton = document.getElementById("jokes-button");
var dogsButton = document.getElementById("dogs-button");
var catsButton = document.getElementById("cats-button");
var MemesButton = document.getElementById("Memes-button");
var displayText = document.getElementById("content");
//referencing the number api
var dogButton = document.getElementById("dog-button");
//referencing the dog pics api
var displayPic = document.getElementById("content");
//referencing the dog pics api

function fetchJoke() {

  var url =
    'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        Error('Something went wrong');
      }
    })
    .then(data => {
      console.log(data);
      renderJoke(data);
    })

  // jokesButton.addEventListener("click",fetchJoke)

}
function renderJoke(data) {
  var jokeEl = document.createElement("p");
  if (data.type === 'single') {
    jokeEl.textContent = data.joke;
    displayText.appendChild(jokeEl);

  }
  else {
    //my code goes here
    jokeEl.textContent = data.setup + data.delivery;
    displayText.appendChild(jokeEl);
  }


}
function fetchCat() {
  var url = `https://cat-fact.herokuapp.com`;
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        Error('Something went wrong');
      }
    })
    .then(data => {
      console.log(data);
      renderJoke(data);
    })

  // jokesButton.addEventListener("click",fetchJoke)

}
function renderJoke(data) {
  var jokeEl = document.createElement("p");
  if (data.type === 'single') {
    jokeEl.textContent = data.joke;
    displayText.appendChild(jokeEl);

  }
  else {
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
})


//------------ numbers api

// //append into the box whatever we what to see (like a image using jquery)
// var randomButton = document.getElementById("random-button");
// var numbersButton = document.getElementById("numbers-button");
// var displayText = document.getElementById("content");

numbersButton.addEventListener("click", fetchNumber);

function fetchNumber() {
  var number = Math.floor(Math.random() * 100);
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
//space
var spaceButton = document.getElementById("spaceButton");
var displayText = document.getElementById("content");
var spacebutton = document.querySelector('#space')

// spaceButton.addEventListener('click', function () {
//   var spaceEl = document.createElement("p");
//   var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY';
//   fetch(url)
//     .then((response) => {
//       if (response.ok) {
//         return response.text();
//       } else {
//         spaceEl.textContent = data.setup + data.delivery;
//         displayText.appendChild(spaceEl);
//         throw new Error('Unable to retrieve data from API');
//       }
//     })
//     .then((data) => {
//       spaceEl.textContent = data;
//       displayText.appendChild(spaceEl);
//     })
//     .catch((error) => {
//       spaceEl.textContent = error.message;
//       displayText.appendChild(spaceEl);
//     });
// // });

// function render(data) {
//   var space = document.createElement("p");
//   space.textContent = data;
//   displayText.appendChild(space);
// }


//dogs

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
var favoritebutton = document.querySelector('#favorite')


favoritebutton.addEventListener('click', function () {
  //    var userInput = document.querySelector('userinput').value
  var content = document.querySelector('#content')
  // console.log(content.children[1].children[0].src)
  var history = JSON.parse(localStorage.getItem("history")) || []
  if (content.children[1].children[0] === "IMG") {
    //if we get remove p tag with place holder change first child to index of 0
    console.log("I made it")
    history.push(content.children[1].children[0].src)
  }
  else {
    history.push(content.children[1].textContent)
  }
  localStorage.setItem("history", JSON.stringify(history));
});






foodButton.addEventListener('click', fetchFood)


// var space = document.getElementById("fetchSpace");


// spaceButton.addEventListener('click', fetchspace) ;

// numberButton.addEventListener("click", nu);

dogButton.addEventListener("click", fetchDogs);


jokesButton.addEventListener("click", fetchJoke);