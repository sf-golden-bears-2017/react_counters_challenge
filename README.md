# Intro

In React, different sections of your app are separated into parts called "components". You can think of each component a little bit like a function that takes in some arguments (which are "props" aka "properties" in React) and returns HTML.

## Breaking index.js down

If you look at the `index.js` file, you will see two distinct sections of code. Let's walk through these.

### Imports

At the top are the imported files. Let's start with the line that looks like this:

```
import App from './App';
```

This is telling Node to `import` some code from a file called `App.js` and put it in a variable called `App`.

In Ruby, when you require a file, you automatically include 100% of the code in the required file. In JavaScript, you have to specify which parts of your code to "export". Some variables or functions will be made available to be included in other files, and some won't. It's a little like the difference between public and private methods in Ruby.

If you look in the `App.js` file, you'll see `export default App;` at the bottom. This line makes the App class available for inclusion in other files like `index.js`. If you added a function to `App.js` but didn't export it, you wouldn't be able to import that function anywhere else in your project.

We are importing a few parts of React itself in the line with `import React from 'react';`. That line says to import the project located in the `react` npm package and name it `React` (you can tell it's a package and not a file we wrote because it says `from 'react'` and not `from './react'` because that starting `./` indicates the current folder in our project, and a lack of it indicates a package from npm). It will grab whatever class or function in the react library has been exported with `export default`.

### Activating React on the Page

After doing all that importing, we have to actually tell React what part of our page to render in. This is what 

```
ReactDOM.render(<App />, document.getElementById('root'));
```

is for. If you look at our `index.html` file in the `public` folder, you'll see a div in the middle that looks like this: `<div id="root"></div>`. When you call `ReactDOM.render`, you have to pass it an element like that, and React will render a component inside that element on the page.

What this line is saying in total is "grab our `App` element and render it inside a div with an id of `root`".

## Breaking down App.js

If you look in `App.js`, you'll see a similar imports section at the top, and then a class definition starting with `class App extends React.Component`.

### Extends and Inheritance

`extends` is how you use inheritance in React. `extends React.Component` means this class inherits all the functions and behavior of the `React.Component` class.

### The render function and JSX

The `render` function is the core of every React component. This is where you specify what the component should look like on the page. You'll do this by writing HTML-like syntax called JSX. The JSX in this render function says to generate a div with a class of `page-center-frame` and then render three different copies of the `Counter` component inside it.

## Breaking down Counter.js

Finally, we have our `Counter.js` file, which defines the `Counter` component. The basic structure of this component is a lot like the `App` component except that it renders differently and it has a `constructor` function and a function called `increment` defined.

### The constructor function

The `constructor` function in JavaScript is exactly the same as the `initialize` function in Ruby. It sets up the class when you first create it.

#### super

The `super` function works exactly the same way as `super` in Ruby. Since the constructor for the `React.Component` class does some important basic setup for all React components, we need to call it here to get that setup stuff to run in addition to the extra new behavior we're defining here.

#### Setting the state

State is 

# Add decrement buttons

# Add countBy prop

# Add Total display