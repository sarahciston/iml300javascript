/*  Multiline comments look 
    like this                  
*/

// single line comments like this
// toggle comments on & off with Command+Slash on a mac

// <--this file structure is also how you would set up your files locally on your hard drive, on github, p5 editor, anywhere
// can push to github from glitch and fetch from there to disk too

// prints "hi" in the browser's dev tools console (NOT the glitch console which is on the server-side)
console.log("hi iml300");


let headline = document.getElementById("headline");
// headline.innerText = "Hello, Puppies! 🐶"

//let, var, const are all ways that Javascript declares or initializes variables. 
//in older versions of JS var is a variable, const is constant. let is the newest syntax and is universal.
let line = document.getElementById("special")
line.style.color = 'pink'

let newLine = document.createElement('P')
newLine.innerHTML = "new line written with javascript"
newLine.classList.add('line')
document.body.appendChild(newLine)

// two selector options, at least
let allPara = document.querySelectorAll('P') 
let lines = document.getElementsByClassName('line'); 
console.log(lines)
lines[1].innerHTML = "Replaced and modified!"

let button = document.createElement("BUTTON"); // creates a button but hasn't put it anywhere yet
button.innerHTML = "click me"; // puts text in the button
// line.appendChild(button) // adds a button inside every paragraph

//TEMPLATE FOR EVENT HANDLERS IN JAVASCRIPT
//Callbacks! these are made in 2 parts. First make and name, then do and wait
// let line = document.getElementById("line")
line.addEventListener("mouseover", mouseoverEvent);

function mouseoverEvent() {
  line.style.backgroundColor = "pink";
  line.style.color = 'blue'
  console.log("mouseOver");
}

//how would we write something to change the color to blue when the user moves away?
line.addEventListener("mouseout", mouseoutEvent)
function mouseoutEvent(){
  line.style.backgroundColor = 'white'
  line.style.color = 'pink'
}

//or when they click, or do something else?

line.addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
});

//templates
function toggle (t, c){
  document.getElementById(t).classList.toggle(c);
}

