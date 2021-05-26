# Frontend Mentor - Rock, Paper, Scissors solution

This is a solution to the [Rock, Paper, Scissors challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- Play Rock, Paper, Scissors against the computer
- **Bonus**: Play Rock, Paper, Scissors, Lizard, Spock against the computer

### Links

- Solution URL: [https://github.com/LeDuy1194/projects/tree/master/rock-paper-scissors-master](https://github.com/LeDuy1194/projects/tree/master/rock-paper-scissors-master)
- Live Site URL: [https://leduy1194.github.io/projects/rock-paper-scissors-master/](https://leduy1194.github.io/projects/rock-paper-scissors-master/)
- Live Site URL for bonus: [https://leduy1194.github.io/projects/rock-paper-scissors-master/?mode=bonus](https://leduy1194.github.io/projects/rock-paper-scissors-master/?mode=bonus)

## My process

### Built with

- Semantic HTML5 markup
- LESS
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Javascript

### Continued development

- I learned the usage of flexbox for centering element.
- I got to try the code to rotate the view for mobile-landscape view.
```less
html.forced {
    width: 100vw;
    height: 100vh;
    body {
        min-width: unset;
        min-height: unset;
        width: 100vh;
        height: 100vw;
        transform: translate(-50%,-50%) rotate(90deg) translate(50%,-50%);
    }
}
```
```js
function resizeScreen(event) {
    const minHeightForLandscapeView = 1024;
    var width = window.innerWidth,
        height = window.innerHeight,
        max = Math.max(width, height);
    if (max < minHeightForLandscapeView) {
        if (width > height) {
            document.documentElement.classList.add('forced');
        } else {
            document.documentElement.classList.remove('forced');
        }
    }
}
```

## Author

- Github - [@LeDuy1194](https://github.com/LeDuy1194)
- Frontend Mentor - [@LeDuy1194](https://www.frontendmentor.io/profile/LeDuy1194)

## Acknowledgement

I would like to thank Frontend Mentor for the challenge, that helped me revise my knowledge and my skill.