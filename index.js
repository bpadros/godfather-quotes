import data from "./data.js";


let start = document.getElementById("start");
let quote = document.getElementById("quote");
// let movie = document.getElementById("movie");
let character = document.getElementById("character");


let image = document.getElementById("image");





start.addEventListener("click",function(){
    let random = data[Math.floor(Math.random() * data.length)]
    quote.innerHTML = `"${ random.quote}"`
    // movie.innerHTML = random.movie
    character.innerHTML = random.character
    image.innerHTML = [0].avatar
})