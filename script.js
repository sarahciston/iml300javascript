/*  Multiline comments look 
    like this                  
*/

// single line comments like this
// toggle comments on & off with Command+Slash on a mac

// <--this file structure is also how you would set up your files locally on your hard drive, on github, p5 editor, anywhere
// can push to github from glitch and fetch from there to disk too

// prints "hi" in the browser's dev tools console
console.log("hi");

let headline = document.getElementById("headline");
// headline.innerText = "Hello, Puppies! 🐶"

//let, var, const are all ways that Javascript declares or initializes variables. in older versions of JS var is a variable, const is constant. let is the newest syntax and is universal.
let line = document.getElementById("line");
// line.style.color = 'pink'
// line.innerHTML = "Replaced and modified!"

//let allPara = document.querySelectorAll('p') //selects all the paragraphs

let button = document.createElement("BUTTON"); // creates a button but hasn't put it anywhere yet
button.innerHTML = "click me"; // puts text in the button
// line.appendChild(button) // adds a button inside every paragraph

//TEMPLATE FOR EVENT HANDLERS IN JAVASCRIPT

document.getElementById("line").addEventListener("mouseover", mouseOverEvent);
function mouseOverEvent() {
  document.getElementById("line").style.backgroundColor = "pink";
  console.log("mouseOver");
}

//how would we write something to change the color to blue when the user moves away?
//or when they click, or do something else?

/*
document.addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
});
*/
