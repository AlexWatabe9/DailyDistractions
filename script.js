var randomButton = document.getElementById("random-button");
var factsButton = document.getElementById("facts-button");
var jokesButton = document.getElementById("jokes-button");
var dogsButton = document.getElementById("dogs-button");
var catsButton = document.getElementById("cats-button");
var MemesButton = document.getElementById("Memes-button");
var displayText = document.getElementById("content");
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
  if (data.type === 'single'){
    jokeEl.textContent = data.joke;
  displayText.appendChild(jokeEl);

  }
  else{
    //my code goes here
    jokeEl.textContent = data.setup + data.delivery;
  displayText.appendChild(jokeEl);
  }
  
  
}

























// function fetchCat() {
//   var url = `https://cat-fact.herokuapp.com`;
//   fetch(url)
//     .then(response => {
//       if (response.ok) {
//         return response.text();
//       } else {
//         Error('Something went wrong');
//       }
//     })
//     .then(data => {
//       console.log(data);
//       render(data);
//     })

//   function render(data) {
//     var facts = document.createElement('p');
//     facts.textContent = data;
//     displayText.appendChild(facts);
//   }

// }


//------------ numbers api

// //append into the box whatever we what to see (like a image using jquery)
//move all global vars to the top and all event listeners at bottom
//attaching to a button
// function fetchFact() {
//   var number = 100;
//   var type = 'math';
//   var url = `http://numbersapi.com/${number}/${type}`;

//   fetch(url)
//     .then(response => {
//       if (response.ok) {
//         return response.text();
//       } else {
//         Error('Something went wrong');
//       }
//     })
//     .then(data => {
//       console.log(data);
//       render(data);
//     })

//   function render(data) {
//     var facts = document.createElement('p');
//     facts.textContent = data;
//     displayText.appendChild(facts);
//   }

// }
// console.log(fetchFact)
// factsButton.addEventListener('click', fetchFact)
jokesButton.addEventListener('click', fetchJoke)
// catsButton.addEventListener('click', fetchCat)