# Intro

In React, different sections of your app are separated into parts called "components". You can think of each component a little bit like a function that takes in some arguments (which are "props" aka "properties" in React) and returns HTML.

## Breaking it down

If you look at the `index.js` file, you will see several distinct sections of code. Lets' walk through these.

### Imports

At the top are the imported files. Let's start with the line that looks like this:

```
import Counter from './Counter';
```

This is telling Node to `import` some code from a file called `Counter.js` and put it in a variable called `Counter`.

In Ruby, when you require a file, you automatically include 100% of the code in it. In JavaScript, you have to specify which parts of your code to "export". It's a little like the difference between public and private methods. If you look in the `Counter.js` file, you'll see 

We are importing a few parts of React itself in the line with `import React, { Component } from 'react';`. That line says to import the project located in the `react` npm package, and set , and also adding another file of our own and some css.

# Add decrement buttons

# Add countBy prop

# Add Total display