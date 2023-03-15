var randomButton = document.getElementById("random-button");
var numberButton = document.getElementById("numbers-button");
var displayText = document.getElementById("content");
var jokesButton = document.getElementById("jokes-button");
var dogBtn = document.getElementById("dog-button");
var catBtn = document.getElementById("cats-button");
var catFactsBtn = document.getElementById("cat-facts-button");
var MemesButton = document.getElementById("Memes-button");
var displayText = document.getElementById("content");
var resetButton = document.getElementById('reset')
var displayPic = document.getElementById("content");
var likeButton = document.getElementById("like");

resetButton.addEventListener('click', function(){
  location.reload()
})

function refresh(){
  location.reload();

} 


// Fetches Jokes 
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
    }
  

  
  else {
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

numberButton.addEventListener("click", fetchNumber);



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
function fetchFood() {
  var url = "https://www.themealdb.com/api/json/v1/1/categories.php";

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
    console.log(data.categories[0])
    var recipeList = document.createElement("ul");
    data.categories.forEach((recipe) => {
      console.log(recipe);
      var recipeItem = document.createElement("li");
      // recipeItem.textContent = `${recipe.strCategory} - ${recipe.strCategoryThumb}`;
      recipeItem.innerHTML = `<h3> ${recipe.strCategory} <h3><img src="${recipe.strCategoryThumb} "class = "width" alt= "food image">`; 
      recipeList.appendChild(recipeItem);
    });
    displayText.appendChild(recipeList);
  }
}

var foodButton = document.querySelector('#food-button');

// Add an event listener to the button element
foodButton.addEventListener('click', fetchFood )
// foodButton.addEventListener('click', function() {
//   fetchFood();
//   console.log('Button was clicked!');
// });



// foodButton.addEventListener('click', fetchFood);

//space

//favorite button
// var userInput = document.querySelector('userinput').value

var favoritebutton = document.querySelector("#favorite");

favoritebutton.addEventListener("click", function () {
  //    var userInput = document.querySelector('userinput').value
  var content = document.querySelector("#content");
  // console.log(content.children[1].children[0].src)
  var history = JSON.parse(localStorage.getItem("history")) || []
  var saveContent = content.children[1].children[0];
  if (typeof saveContent !== 'undefined' && saveContent.tagName === "IMG") {
    //if we get remove p tag with place holder change first child to index of 0
    // console.log("I made it");
    history.push(content.children[1].children[0].src);
  }
  else if (typeof saveContent !== 'undefined' && data.type === "single" && saveContent.tagName === "IMG") {
    history.push(content.children[1].children[0].src);
  }
  
   else {
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

function getLikes() {
  var content = document.querySelector("#content");
  var myLikes = JSON.parse(localStorage.getItem('history'));
  for (var i = 0; i < myLikes.length; i++ ){
    if (checkUrl(myLikes[i])){ 
      var myImage = document.createElement('img')
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

  render(localStorage)
}

function fetchRandom(){
var apiList=[
  'fetchJoke','fetchDogs','fetchFact', 'fetchCatFacts', 'fetchCats'
]
var i = apiList[Math.floor(Math.random()* apiList.length)]
console.log(i)
if (i==='fetchJoke'){
  fetchJoke();
}
else if (i === 'fetchDogs'){
  fetchDogs();
}
else if (i === 'fetchNumber'){
  fetchNumber();
}
else if (i === 'fetchCatFacts')
fetchCatFacts();
else if (i === 'fetchCats')
fetchCats();
};










// factsButton.addEventListener("click", fetchFact);
dogBtn.addEventListener("click", fetchDogs);


randomButton.addEventListener("click", fetchRandom);
jokesButton.addEventListener("click", fetchJoke);

randomButton.addEventListener("click", fetchRandom);
catBtn.addEventListener("click", fetchCats);
catFactsBtn.addEventListener("click", fetchCatFacts);
likeButton.addEventListener('click', getLikes);