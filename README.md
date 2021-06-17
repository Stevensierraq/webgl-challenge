# Weather App challenge
This is a monorepo that uses Lerna for its orchestration, the idea of this project is to show how we can add some patterns and architectures to a basic application to make it more scalable.

## Decisions
- I decided to use Three.js and Cannon.js due to this libraries are the core of react-three-fiber. in order to have more control.
- I used NextJs as React framework to give a performant application, taking advantage of SSR and SSG
- For styles I'm using Styled Components
- For unit testing I'm using testing library
- As architectural pattern I'm oriented to hexagonal architecture
- I built a monorepo orchestrated with Lerna and yarn workspaces

## Packages
### Infrastructure
Acording hexagonal architecture this package is regarding to infrastructure layer

### UI Library
I thought it was a good idea build our own adidas ui library, so I build a library with `React` & I used `Storybook` for a showcase.
![Screen Shot 2021-03-04 at 9 47 33 AM](https://user-images.githubusercontent.com/30024449/109981190-ac414d00-7cce-11eb-87f7-05d9e3999dea.png)


### Webgl Library
Library based on Three.js and Cannon.js, this package was build with vanilla javascript, I'm using diferent textures and build my own barometer texture
<img width="938" alt="Screen Shot 2021-06-17 at 4 43 19 PM" src="https://user-images.githubusercontent.com/30024449/122481208-e68bdd00-cf93-11eb-9f7b-4659d60e89ea.png">

### Weather App
This is the final app that consumes the other packages.
- The request from the api is getting from Server side in order to take advantage of ssr
- You can use input/controls to change the behaviour of the webgl view
- When you have a chance of rain over 40% the UI emulate a rain

<img width="1510" alt="Screen Shot 2021-06-17 at 3 39 32 PM" src="https://user-images.githubusercontent.com/30024449/122480065-c65b1e80-cf91-11eb-9663-2fc04777d2ae.png">



## Instalation

Clone this repository.

```sh
$ cd weather-challenge
$ yarn
```
Run the application
```sh
$ yarn lerna run weather-app:dev --stream
```

Run only ui lib showcase
```sh
$ yarn lerna run ui:storybook --stream
```
Run only webgl lib
```sh
$ yarn lerna run ui:storybook --stream
```

Run the unit testing
```sh
$ yarn lerna run ui:test --stream
```
*Note: Maybe you need to install lerna globaly*

### Possible improvements
- Create var envs.
- Improve some responsive styles
- Add more testing coverage
- Handle exceptions
- Add typescript to webgl library
- Improve rain experience
