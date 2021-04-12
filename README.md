# Not So Vanilla 🍦 "Just" Javascript

## What Is Javascript?

> "The programming language of HTML and the Web. Interaction with the user, animation, etc, all done with JavaScript." (Q)

## What's a Javascript Library

> P5 is a Javascript **library**, which means it's an add-on set of Javascript that's been pre-written to make certain things easy. But there's a lot Javascript can already do.

> Pssst, we've been coding in Javascript _this whole time!_

> And there's a TON of other JS libraries for ANY specialized thing you might want to do, from make sleek websites, to run servers, to music, virtual reality, or machine learning. [Here's a list](https://en.wikipedia.org/wiki/List_of_JavaScript_libraries)

> We say "vanilla"🍦 Javascript when we mean not using any added libraries, but usually you're always using _some_... this demo will offer some code concepts that apply to web development as well as general times you're working with Javascript situations.

---

## Setup

- Review the DOM

> "An HTML document is structured according to the Document Object Model, or “DOM”. [...] The DOM consists of every element on the page, laid out in a hierarchical way that reﬂects the way the HTML document is ordered." (Q)
> ![](https://cdn.glitch.com/d52771bb-1150-4ddb-9baf-2f10e553cd16%2Fpic_htmltree.gif?v=1617059534959)

- Elements: use `<tags>` and have parent/child relationships

  - id vs class: (single vs groups)
  - styles: (inline vs css file)

- Load script files, for own JS and any outside libraries
  - 2 ways, each with benefits, either one use the `<script></script>` tag in your index file:
  - _cloud_: fewer steps, stays up to date
  - _local_: you save the file so you control it, works offline, doesn't randomly update on you

- Review comments: single and multiline. Key part of coding, debugging, & documenting--for you and others!

---

## Review: P5.js DOM 
> Besides its added functionalities, the P5.js library "wraps" up Javascript to simplify the syntax. 
> P5's [DOM functions](https://p5js.org/reference/#group-DOM):
  - `selectElement()`
  - `createElement('tag', [content inside])`
  - `createDiv([html/content])`
  - [Things to do on a selected or created element](https://p5js.org/reference/#/p5.Element)(`el`):
    - `el.style('color', 'black')`, `el.style('font-size', '18px')`
    - `el.position(0,0)` (absolute position)
    - `el.attribute('align', 'center')`
    - `el.hide()`, `el.show()`
    - `el.size()`
    - `el.html(<tag></tag)>, true)` note: the additon of true appends instead of replacing (if no argument, returns existing)
    - `el.parent()`, `el.child()` attaches new thing to existing thing
    - [Events](https://youtu.be/HsDVz2_Qgow): `createButton()`, `el.mouseClicked()`, `el.mouseOver()`, `el.mouseOut()`, `changed()`, `createInput()`
    - Highly recommend the [callbacks on multiple elements video](https://youtu.be/KeZBpeH59Q4)

>These are all "wrappers" of the same code you learned to write in plain JS. Behind the scenes, it's calling that plain JS to do this work. 
_Let's learn how!_

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

- **Add/remove class is *CONFUSING FOR NO REASON***

  - `el.className = 'class'` set equal to [className](https://www.w3schools.com/jsref/prop_html_classname.asp)
  - OR: `el.classList.toggle('class')` note [toggle](https://www.w3schools.com/jsref/prop_element_classlist.asp) on/off choice can avoid a check before if/then but might intro errors
  - OR: [add/remove from classList](https://www.w3schools.com/howto/howto_js_add_class.asp) `el.classList.add('class')` and `el.classList.remove('class')` note the name is in quotes but doesn't need dot before it because class is in the attribute
    

- [**Modify Styles**](https://www.w3schools.com/jsref/dom_obj_style.asp)

  - `el.style.color = 'blue'`
  - `el.style.borderBottom = '1px dotted black'`

- [**Events**](https://www.w3schools.com/jsref/dom_obj_event.asp):
  - think about how these events combine using thing you touch and thing you affect
  - click, scroll, hover, mouseEnter/Leave, slideToggle etc. onClick vs item.click (function)
  - Hide/show/fade/delay/toggle
    `document.addEventListener('eventname', functionName)` ``
  - [Transformations](https://www.w3schools.com/css/css3_2dtransforms.asp)
  
>Note where elements appear, in the canvas vs in the rest of the DOM/page depending on how you're writing them. As you're blending the P5 library with other Javascript this can get confusing. P5 has ways to do both, but they're different. So does plain JS. They serve different purposes.
  - e.g. Choose `createImage()` (P5) or `document.createElement('IMG')` and then `appendChild` (plainJS) anywhere in the DOM vs choose `image()` to put it inside a canvas element.  
  - Choose `setup()` or `draw()` depending on if you want it to happen once or repeatedly, only works in P5.


## Review: Logics of Code** 
> You already know (because you know JS) or may see around town:

  1. **[Callbacks](https://youtu.be/NcCEzzd9BGE) and Code Patterns**
    1. MAKE & NAME : create a thing & assign it to a variable so you can keep referring to it
    2. ACT & WAIT: use functions to say what you want to do with it, or to it, on certain occasions
    
    ```
    var thing = new Thingy() //where Thingy is a class that has a function to handle doStuff
    thing.doStuff('click', action)
    
    function action(){
      console.log("this happened")
    }
    
    ```
  2. **Loops & Conditionals** 
    - `if`/`then` and `if`/`else`
    - `for` loops `for (let i=0; i<list.length;i++){}` and `for (let l in list){}`
    - `try`/`catch` and the dreaded `while`

  3. **Data Types** Javascript is wild & doesn't flag its types like other languages
    - individual: strings, numbers (integers, floats, etc.), binary, etc.
    - groups: 
      - *arrays* aka lists 
      - *objects* aka dictionaries or key-value paired lists etc. 
      - sets (stricter lists)
    - imported data that can be converted to the above: JSON, CSV, TXT, etc. 
  
  
   *Consider*
    - writing pseudocode to start
    - comments as debug strategy (Note where your `console.log()` comments appear in glitch, frontend vs backend concepts)
    - including error handling

---

## BONUS ROUNDS:

> Ways people have solved problems, tried to make life easier and made it more complicated, aka words you might see around town & more to think about later

  ### Helpers

  - JQuery
  - p5
  - What are some you've heard of? Do you know what they do?

  ### Templating & Design)

  - Handlebars
  - Bootstrap, Semantic.io, Material.io (React)
  - [React] a whole superset of JS built by Facebook to complex sites with many components

  ### Design

  - [ScrollMagic](https://scrollmagic.io/)

  ### Server

  - [Node] a great place to start with Node is the Glitch template! Use Node for websites where you want a database or need to send info back and forth to a server. You can also use Node  to run Javascript on your local computer outside a web browser

  ### Machine Learning

  - [ML5](https://ml5js.org), part of the p5/Processing family, is a simpler version of (aka built on/wrapper of Tensorflow)
  - [Tensorflow]

---

## Examples made with "just" javascript

- [Cyberfeminism Index](https://cyberfeminismindex.com/) only uses a bit of JQuery but wouldn't need it. Also another type of site your project could be, gathering resources/examples for others.

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