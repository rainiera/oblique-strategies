# oblique-strategies

## Motivation

One of my New Years' resolutions is to stop being afraid of JavaScript and
modern front-end development, or at least develop a core competency in it...

So this was built as an exercise in:
- a modern JavaScript build pipeline
  - using `nvm` for node version management and `npm` and all of the interesting design decisions behind a package manager (e.g., its [dependency model](https://lexi-lambda.github.io/blog/2016/08/24/understanding-the-npm-dependency-model/))
  - `webpack`
  - `babel`
- modularizing React components
- using a React component library ([Bloomer](https://bloomer.js.org/)) based on a popular CSS framework ([Bulma](https://bulma.io/))
- using Sass to [customize](https://bulma.io/documentation/overview/customize/) said popular CSS framework
- [modularizing CSS](https://medium.com/@pioul/modular-css-with-react-61638ae9ea3e)
- investigating how a device accelerometer [plugin](https://github.com/alexgibson/shake.js/blob/master/shake.js) worked
- mining cryptocurrencies in the browser (tried it for a bit

```
font-family: 'Pacifico', cursive;
font-family: 'Inconsolata', monospace;
font-family: 'Cutive Mono', monospace;
font-family: 'Monoton', cursive;
font-family: 'Roboto Slab', serif;
```

```
with open('js/strategies.jsx', 'w') as whandle:
     whandle.write('const strategies = [\n')
     for strategy in strategies:
         whandle.write("\"{}\",\n".format(strategy))
     whandle.write(']\n')
     whandle.write('\n')
     whandle.write('export default strategies')
```

## Strategies Credit

- http://www.rtqe.net/ObliqueStrategies/Ed1.html
- http://www.rtqe.net/ObliqueStrategies/Ed2.html
- http://www.rtqe.net/ObliqueStrategies/Ed3.html
- http://www.rtqe.net/ObliqueStrategies/Ed4.html
