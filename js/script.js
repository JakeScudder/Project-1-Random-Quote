/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//This is a quotes array.  It contains objects that contain the quote, the source, and possibly include further information relating to the quote.
let quotes = [
  {quote:"Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", source: "Marcus Aurelius", citation: "Meditations", year: 1558  },
  {quote:"Nothing, to my way of thinking, is a better proof of a well ordered mind than a man’s ability to stop just where he is and pass some time in his own company." , source: "Seneca", category: "Stoicism" },
  {quote:"Curb your desire—don’t set your heart on so many things and you will get what you need." , source: "Epictetus", category: "Minimalism" },
  {quote:"Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned." , source: "Buddha" },
  {quote:"Persistence is very important. You should not give up unless you are forced to give up." , source: "Elon Musk", category: "Entrepreneur" }

];

//Random color generator from https://css-tricks.com/snippets/javascript/random-hex-color/

//Can't seem to link it to the background color though.  Tried altering the css with var(--randomColor), but this didn't work.

var randomColor = Math.floor(Math.random()*16777215).toString(16);
console.log(randomColor);

//Load new quotes: Also non-working

var newQuote = window.setInterval(printQuote(), 1000);

//This function gets a random Quote by first getting a random Number and then searching the index of the quotes array for that object.
function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * 5);
  return quotes[randomNum];
}


//This function creates an html string by accessing the different key/value pairs in the quote object. It then prints that string to the webpage by linking it to the quote-box ID.
function printQuote() {
  let html = '';
  let randomQuote =  getRandomQuote();
  html += '<p class="quote">' + randomQuote.quote + '</p>';
  html += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    html += '<span class="citation">' +randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    html += '<span class="year">' + randomQuote.year + '</span>';
  }
  if (randomQuote.category) {
    html += '<span class="category">' + randomQuote.category + '</span>';
  }
  html += '</p>';

  let div = document.getElementById('quote-box');
  div.innerHTML = html;
  return div
}






/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
