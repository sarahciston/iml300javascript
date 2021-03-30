# Not So Vanilla 🍦 "Just" Javascript

## What Is Javascript?

> "The programming language of HTML and the Web. Interaction with the user, animation, etc, all done with JavaScript." (Q)

## What's a Javascript Library

> P5 is a Javascript **library**, which means it's an add-on set of Javascript that's been pre-written to make certain things easy. But there's a lot Javascript can already do.

> Pssst, we've been coding in Javascript _this whole time!_

> And there's a TON of other JS libraries for ANY specialized thing you might want to do, from make sleek websites, to run servers, to music, virtual reality, or machine learning. [Here's a list](INSERT WIKI)

> We say "vanilla" Javascript when we mean not using any libraries, but usually you're always using _some_... this demo will offer some code concepts that apply to web development as well as general times you're working with Javascript situations.

---

## Setup

- Review the DOM

> "An HTML document is structured according to the Document Object Model, or “DOM”. [...] The DOM consists of every element on the page, laid out in a hierarchical way that reﬂects the way the HTML document is ordered." (Q)
> ![](https://cdn.glitch.com/d52771bb-1150-4ddb-9baf-2f10e553cd16%2Fpic_htmltree.gif?v=1617059534959)

- Elements: use \<tags> and have parent/child relationships

  - id vs class: (single vs groups)
  - styles: (inline vs css file)

- Load script files, for own JS and any outside libraries (2 ways):

  - cloud: fewer steps, stays up to date
  - local: you save the file so you control it, works offline, doesn't randomly update on you
  - either use the <script></script> tag in your index file (see this demo)

- Review comments: single and multiline. Key part of coding, debugging, & documenting--for you and others!

---

## Essential Javascript for Web

- **Select** by id, class, element/tag, parent, child

  - `document.getElementById('id')` `document.getElementByClassName('class')` `document.querySelector('#id')` `document.querySelectorAll('.class')`
  - Note the different syntax options. [Document](https://www.w3schools.com/jsref/dom_obj_document.asp) for more choices.
  - set it to a variable name to 'save' it for reuse:
    `let line = document.querySelector('#line') //selects the element with the id line`

- **Create** makes new elements and [**Append**](https://www.w3schools.com/jsref/dom_obj_all.asp) places the items we made where we want them

  ```javascript
  let button = document.createElement("BUTTON"); // creates a button but hasn't put it anywhere yet
  button.innerHTML = "click me"; // puts text in the button
  line.appendChild(button); // adds a button inside every paragraph
  ```

- Add/remove class or id

- [**Modify Styles**](https://www.w3schools.com/jsref/dom_obj_style.asp)

  - `el.style.color = 'blue'`
  -

- [**Events**](https://www.w3schools.com/jsref/dom_obj_event.asp):
  - think about how these events combine using thing you touch and thing you affect
  - click, scroll, hover, mouseEnter/Leave, slideToggle etc. onClick vs item.click (function)
  - Hide/show/fade/delay/toggle
    `document.addEventListener()` ``

## Simplify with the P5.js Library

> P5 has a whole set of [DOM functions](https://p5js.org/reference/#group-DOM)

- selectElement()
- createElement('tag', [content inside])
- createDiv([html/content])
- [What you can do once you've selected or created an element (here called 'el'):](https://p5js.org/reference/#/p5.Element)
  - el.style('color', 'black'), el.style('font-size', '18px')
  - el.position(0,0)
  - el.attribute('align', 'center')
  - el.hide(), el.show()
  - el.size()
  - el.html(<tag></tag)>, true) //(the additon of true appends instead of replacing)(if no argument, returns existing)
  - el.mouseClicked(), el.mouseOver(), el.mouseOut()
  - el.parent(), el.child() (attaches to)

---

## Your Project

### ← index.html

Where you'll write the content of your website. This can start out barebones because you can add so much with Javascript. Good rule of thumb is to put in HTML anything that will stay static. Javascript is for interactivity!

### ← style.css

CSS files add styling rules to your content. Remember you can change these with Javascript too.

### ← script.js

Add interactivity with JavaScript. Woo!

### ← assets

A folder. Drag in `assets`, like images or music, to add them to your project. Often for bigger projects you'll create separate folders for your styles and javascript files too.

### ← README.md

That's this file, where you can tell people what your cool website does and how you built it. You know it well from GitHub. It doesn't show up to your end-user/reader.

---

## Examples made with "just" javascript

- [Cyberfeminism Index](https://cyberfeminismindex.com/) only uses a bit of JQuery but wouldn't need it. Also another type of site your project could be, gathering resources/examples for others.

---

## BONUS ROUND:

> Ways people have solved problems, tried to make life easier and made it more complicated, aka words you might see around town & more to think about later

### Helpers

- JQuery
- P5.js

### Templating Languages (for design)

- Handlebars.js

### Server

- Node.js

### Machine Learning

- ML5.js, built on... (wrapper of)
- Tensorflow.js
