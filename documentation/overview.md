# Overview

This page will attempt to document the high-level considerations of each framework to help determine which will best server the needs of Dynamic Organics. This will not cover the specifics of the development, but will instead focus on overall process – installing, deploying, required libraries, performance, and community considerations – sentiment, support, etc. For examples of how each framework deals with specific development methods, see [examples](./examples.md).

## Stats

### Basics 

| Libary | Library Size | Package Listing Size (JSON) | Hot-Reload Engine | Primary Backer | 
|---|---|---|---|---|
| Svelte | | 87K | Vite | [Some Guy](https://vercel.com/blog/vercel-welcomes-rich-harris-creator-of-svelte) | 
| React | | 497K | | Facebook | 
| Vue | | 30K | Vite | [Mr. You](https://en.wikipedia.org/wiki/Vue.js#History) |

### Performance 

| Library | Performance Rating | Performance Ranking |
|---|---|---|
| Svelte | 99.0 | 3 | 
| React | 82.0 (w/Mbox - highest) | 16 |
| Vue | 86.0 | 14 | 


### Usage

| Library | Retention Rate | State of JS Users | Would Not Use % |
|---|---|---|---|
| Svelte | 90% | 2719 | 2.2 |
| React | 84% | 10856 | 13.1 |
| Vue | 80% | 6996 | 10.3 |

## Installation Process

### React

1. `npx create-react-app <app-folder>`
1. `cd <app-folder>`
1. `npm start`
1. Hack away

### Vue

1. `npm init vue@latest`
1. Answer 9 questions
![Vue Installation](./assets/vue-install.png)
1. `cd <app-folder>`
1. `yarn`
1. `yarn dev`
1. Hack away

### Svelte

1. `npx degit sveltejs/template <app-folder>`
1. `cd <app-folder>`
1. To use Typescript: `node scripts/setupTypeScript.js`
1. `yarn`
1. `yarn dev`
1. Hack away

## Tutorials

- [Vue](https://vuejs.org/tutorial/#step-1)
- [React](https://reactjs.org/tutorial/tutorial.html)
- [Svelte](https://svelte.dev/tutorial/basics)

## Code Per Component

The following table lists the lines of code in each component. Comments and `console.log` statements were removed. Utility classes, such as determining the winner, were moved into a separate file (as it was the same code across all three) and is not factored. The primary app file does include any provided boilerplate from the startup. This is in no way indicative of the best-practices version of each of these styles, but simply serves as a high-level comparative data-point. 

### Lines

| Component | React* | Svelte | Vue | 
|---|---|---|---|
| App | 74 (120) | 106 | 138 |
| Grid | 35 | 73 | 75 |
| PlayerName | 10 | 12 | 17 |
| UserCount | 9 | 11 | 13 |
| *TOTAL* | 238 (284) | 202 | 243 |

\*_Note on React: as OOTB React encourages the usage of external sylesheets, the values were comparatively lower on the main app file. The parenthesis indicate the total when combined with the styles_

### Character Count

Line counts can be a matter of formatting or stylistic choices. Therefore the following character count table is also provided to indciate the overall amount of characters required to achieve the same functionality across all three frameworks. Note that these do include spaces, with one tab indentation equavlent to 4 spaces on the machine for which this comparison was made.

| Component | React* | Svelte | Vue | 
|---|---|---|---|
| App | 1904 (2798) | 2056 | 2919 |
| Grid | 762 | 1450 | 1759 |
| PlayerName | 252 | 277 | 401 |
| UserCount | 297 | 168 | 238 |
| *TOTAL* | 3215 (4109) | 3953 | 5317 |

\*_Note on React: as OOTB React encourages the usage of external sylesheets, the values were comparatively lower on the main app file. The parenthesis indicate the total when combined with the styles_

## Experiential Notes

While Vue attempts to provide several short-had notations and seeks on-element directives vs. allowing wrapping Javascript, it somehow manages to be extremely verbose and requires a strong understanding of the Vue-specific lexicon. I admit that, of the three frameworks, I have worked with Vue the least by-far. Personally I find it a frustrating library to work with, especially as it insists on wrapping a lot of javascript in strings so that it can be attached to attributes; lending a great deal of confusion as-to when it is appropriate to use the moustache syntax vs. a string that will be interpreted as a JS object or function. Perhaps it can be more advantageous when dealing with significantly more advanced applications; but at this time Vue feels like it is too verbose, opinionated, and unreasonably-complex. 

React is a strong and well-adopted library for a reason. While it is slightly more verbose than Svelte; especially when it comes to handling state-based variables, the general patterns are easy to understand and provide exceptional clarity as to intended functionality. One area of concern with React is the stated-opinion that state should be top-down. As-such, the passing of functions for the purpose of surfacing a state change to a child prop from a parent prop is a mechanism that – while more succinct in many cases – creates much more inter-depedence between components. This paradigm essentially forces the parent and child to often code to each other in order to ensure proper operation, which reduces overall modularity of the component.

Svelte has become a personal favorite due to its ability to be a flexibile and simple framework while also being quite powerful. Like Vue, it subscribes to the event trigger model, where the component can surface data to any parent component via emitting (in svelte: dispatching) an event. It is then up to the parent as to whether the parent would like to subscribe to the event and then act-upon the provided information. Unlike both React and Vue, Svelte was created to make an advanced framework that felt like going back to the basics of HTML, CSS, and JS. It is easily the easiest of the three frameworks to learn – in this developers humble opinion – while still providing scalability and power of larger frameworks. The major concerns with Svelte are that it has a much smaller community than either React or Vue and is actively being ehanced and subject to more significant changes thatn with the more mature libraries of Vue and React. 

For very advanced or larger applications that would require larger dev teams, React is likely the preferable choice. When time allows and for smaller, more rapid development efforts, I highly recommend Svelte.

## References

- [https://procoders.tech/blog/svelte-vs-vue-frameworks-comparison/](https://procoders.tech/blog/svelte-vs-vue-frameworks-comparison/)
- [https://dev.to/hb/react-vs-vue-vs-angular-vs-svelte-1fdm](https://dev.to/hb/react-vs-vue-vs-angular-vs-svelte-1fdm)
- [https://2021.stateofjs.com/en-US/libraries/front-end-frameworks/](https://2021.stateofjs.com/en-US/libraries/front-end-frameworks/)