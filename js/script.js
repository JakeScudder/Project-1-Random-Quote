/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//This is a quotes array.  It contains objects that contain the quote, the source, and possibly include further information relating to the quote.
let quotes = [
  {
  quote:"Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", source: "Marcus Aurelius",
  citation: "Meditations",
  year: 1558,
  thought: "Remember Necessity"
  },
  {
  quote:"Nothing, to my way of thinking, is a better proof of a well ordered mind than a man’s ability to stop just where he is and pass some time in his own company." ,
  source: "Seneca",
  thought: "Remember to Breathe"
  },
  {
  quote:"Curb your desire—don’t set your heart on so many things and you will get what you need.",
  source: "Epictetus",
  thought: "Remember the Important Things"
  },
  {
  quote:"Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.",
  source: "Buddha",
  thought: "Remember to Forgive"
  },
  {
  quote:"Persistence is very important. You should not give up unless you are forced to give up.",
  source: "Elon Musk",
  thought: "Remember to keep going"
  },
  {quote: "When thinking about life, remember this: No amount of guilt can solve the past, and no amount of anxiety can change the future.",
  source: "unknown",
  thought: "Remember to Move On"
  },
  {quote:"Letting go gives us freedom, and freedom is the only condition for happiness. If, in our heart, we still cling to anything—anger, anxiety, or possessions—we cannot be free.",
  source: "Thich Naht Hanh",
  thought: "Remember to Let Go"
  },
  {quote:"Your calm mind is the ultimate weapon against your challenges. So relax.",
  source:"Bryant McGill",
  thought: "Remember to Relax"
  }
];

//This function gets a random Quote by first getting a random Number and then searching the index of the quotes array for that object.
let storedNum;
let prevStoredNum;

function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * 8);
  if (randomNum === storedNum || randomNum === prevStoredNum) {
    return getRandomQuote();
  }
  if (randomNum !== storedNum) {
    prevStoredNum = storedNum;
    storedNum = randomNum;
  }
  return quotes[randomNum];
}

//Background color array containing css colors.
let colors = ['deepskyblue', 'gainsboro', 'forestgreen','rosybrown', 'steelblue', 'tan', 'sienna', '#a2dbf7', '#a2dbf7', '#deae25', '#ffc390' ];

//Function to pull a random color from the background color array.
function randomColor() {

  let randomNum2 = Math.floor(Math.random() * 11);
  return colors[randomNum2];

}

/*
This function creates an empty html string.
It then uses the getRandomQuote function to select a random quote from the quote array.
It starts to compile a string of html from the different key/value pairs associated with that random quote.  Once the html is all concatenated, it will then print that quote to the webpage.

I set an interval time to reload the quote of 25 seconds.
Background color changes when the button is pressed or when the interval time elapses.
*/
let timer;

function quoteTimer() {
  clearInterval(timer);
  timer = window.setInterval(printQuote, 20000);
}

function randomBackgroundColor() {
  let newBackground = randomColor();
  //Sets a new background color, then matches it to the quote button
  document.body.style.background = newBackground;
  document.getElementById("loadQuote").style.backgroundColor = newBackground;
}

function printQuote() {
  let html = '';
  let randomQuote =  getRandomQuote();

  randomBackgroundColor();
  quoteTimer();

  html += '<p class="thought">' + randomQuote.thought + '</p>';
  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    html += '<span class="citation">' +randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  html += '</p>';

//The variable div is being set to the quote box ID.
//Then the innerHTML is changed to the html string we compiled.
//Then we return that div.
  let div = document.getElementById('quote-box');
  div.innerHTML = html;
  return div
}



/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, the `printQuote`
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
