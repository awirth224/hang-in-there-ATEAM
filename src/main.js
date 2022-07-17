var mainImage = document.querySelector('.poster-img');
var mainTitle = document.querySelector('.poster-title');
var mainQuote = document.querySelector('.poster-quote');

// var savePosterButton = document.querySelector('.save-poster'); //17
var showMyPosterButton = document.querySelector('.make-poster') //31
var showSavedButton = document.querySelector('.show-saved'); //18
var showRandomButton = document.querySelector('.show-random'); //19
var showFormButton = document.querySelector('.show-form') //20
var neverMindButton = document.querySelector('.show-main') //34
var backToMainButton = document.querySelector('.back-to-main') //39

var imageUrlInput = document.querySelector('#poster-image-url') //26
var titleInput = document.querySelector('#poster-title') //28
var quoteInput = document.querySelector('#poster-quote') //30


var mainPage = document.querySelector('.main-poster') //11
var formPage = document.querySelector('.poster-form') //22
var savedPosterPage = document.querySelector('.saved-posters') //36

var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster; 

window.addEventListener('load', makeRandomPoster)
showRandomButton.addEventListener('click', makeRandomPoster)
showFormButton.addEventListener('click', function(){togglePage(mainPage, formPage)})
showSavedButton.addEventListener('click', function(){togglePage(mainPage, savedPosterPage)})
neverMindButton.addEventListener('click', function(){togglePage(formPage, mainPage)})
backToMainButton.addEventListener('click', function(){togglePage(savedPosterPage, mainPage)})
showMyPosterButton.addEventListener('click', ) ////

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
function makeRandomPoster() {
  var randomImage = images[getRandomIndex(images)]
  var randomTitle = titles[getRandomIndex(titles)]
  var randomQuote = quotes[getRandomIndex(quotes)]
  var newPoster = new Poster(randomImage, randomTitle, randomQuote)
    currentPoster = newPoster
    makeCurrentPoster()
}
function makeCurrentPoster() {
  mainImage.src = currentPoster.imageURL
  mainTitle.innerText = currentPoster.title
  mainQuote.innerText = currentPoster.quote
}
function togglePage(pageToHide, pageToShow) {
  pageToHide.classList.add('hidden')
  pageToShow.classList.remove('hidden')
}
function captureInputValues(imageUrlInput, titleInput, quoteInput) {
  var createPoster = {images: imageUrlInput.value, titles: titleInput.value, quotes: quoteInput.value}
  currentPoster.push(createPoster)
  render ()
}


//use .value to capture input in the inputfields
//add query selector and event listner for "show my poster" button
//use anonymous function to toggle back to main page
//take vaules from inputs and create new instance of our poster class
//using currentPoster
//submit inputted data into their respective arrays 
//use new instance of poster class to display new poster image
//on the main page(DOM)

//Dont forget data modle currentPoster