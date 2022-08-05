let start = document.getElementById("start");
let quote = document.getElementById("quote");
let movie = document.getElementById("movie");
let character = document.getElementById("character");


const quotes = [
  "Fredo Corleone-I'm Your Older Brother, Mike, And I Was Stepped Over!",
 "Look How They Massacred My Boy.",
 "A friend should always underestimate your virtues and an enemy overestimate your faults.",
  "Keep Your Friends Close But Your Enemies Closer",
  "It's A Sicilian Message. It Means Luca Brasi Sleeps With The Fishes",
  "For justice, we must go to Don Corleone.",
  "A man who does not spend time with his family can never be a real man.",
  "I believe in America. America has made my fortune.",
];


start.addEventListener("click",function(){
    let random = quotes[Math.floor(Math.random() * quotes.length)]
    quote.innerHTML = random
})




