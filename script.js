var randomButton = document.getElementById("random-button");
var factsButton = document.getElementById("facts-button");
var jokesButton = document.getElementById("jokes-button");
var dogsButton = document.getElementById("dogs-button");
var catsButton = document.getElementById("cats-button");
var MemesButton = document.getElementById("Memes-button");
var displayText = document.getElementById("content");
var resetButton = document.getElementById('reset')
//referencing the number api
var dogBtn = document.getElementById("dog-button");
//referencing the dog pics api
var displayPic = document.getElementById("content");
//referencing the dog pics api
resetButton.addEventListener('click', function(){
  location.reload()
})

function refresh(){
  location.reload();

}
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
  refresh()
  var jokeEl = document.createElement("p");
  if (data.type === 'single') {
    jokeEl.textContent = data.joke;
    displayText.appendChild(jokeEl);
    }
  

  
  else {
    //my code goes here
    refresh()
    jokeEl.textContent =` ${data.setup} + ${document.write("<br>")} + ${data.delivery}`;
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
factsButton.addEventListener("click", fetchFact);

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


//------------ numbers api

// //append into the box whatever we what to see (like a image using jquery)

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


// var dislikeButton = document.getElementById("dislike")

// function likeButton () {
// localStorage.setItem('like')
// console.log(hello)
// }


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
    dogPics.innerHTML = `<img src="${data.url}"class = "width" alt="Random dog image">`;
    displayPic.appendChild(dogPics);
  }
}

//favorite button
// var userInput = document.querySelector('userinput').value
var favoritebutton = document.querySelector('#favorite')


favoritebutton.addEventListener('click', function () {
  //    var userInput = document.querySelector('userinput').value
  var content = document.querySelector('#content')
  // console.log(content.children[1].children[0].src)
  var history = JSON.parse(localStorage.getItem("history")) || []
  if (content.children[1].children[0].tagName === "IMG") {
    //if we get remove p tag with place holder change first child to index of 0
    console.log("I made it")
    history.push(content.children[1].children[0].src)
  }
  else {
    history.push(content.children[1].textContent)
  }
  localStorage.setItem("history", JSON.stringify(history));
});

function fetchRandom(){
var apiList=[
  'fetchJoke','fetchDogs','fetchFact'
]
var i = apiList[Math.floor(Math.random()* apiList.length)]
console.log(i)
if (i==='fetchJoke'){
  fetchJoke();
}
else if (i === 'fetchDogs'){
  fetchDogs();
}
else if (i === 'fetchFact'){
  fetchFact();
}
};










factsButton.addEventListener("click", fetchFact);

dogBtn.addEventListener("click", fetchDogs);


jokesButton.addEventListener("click", fetchJoke);

randomButton.addEventListener("click", fetchRandom);