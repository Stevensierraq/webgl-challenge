# Weather App challenge
This is a monorepo that uses Lerna for its orchestration, the idea of this project is to show how we can add some patterns and architectures to a basic application to make it more scalable.

## Decisions
- I used NextJs as React framework to give a performant application, taking advantage of SSR and SSG
- For styles I'm using Styled Components
- For unit testing I'm using testing library
- As architectural pattern I'm oriented to hexagonal architecture
- I built a monorepo orchestrated with Lerna and yarn workspaces
- I used rechart.js for charts

## Packages
### Infrastructure
Acording hexagonal architecture this package is regarding to infrastructure layer

### UI Library
I thought it was a good idea build our own adidas ui library, so I build a library with `React` & I used `Storybook` for a showcase.
![Screen Shot 2021-03-04 at 9 47 33 AM](https://user-images.githubusercontent.com/30024449/109981190-ac414d00-7cce-11eb-87f7-05d9e3999dea.png)

### Weather App
This is the final app that consumes the other packages
![Screen Shot 2021-03-04 at 9 48 54 AM](https://user-images.githubusercontent.com/30024449/109981423-e1e63600-7cce-11eb-83e1-11a6193dcc64.png)


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

Run the ui lib showcase
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
