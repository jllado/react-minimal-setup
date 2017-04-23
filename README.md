# react-minimal-setup
Minimal react structure ready for testing and deploy with Docker/docker-compose 


### What's included?

* [React]
* [Webpack 2]
* [Babel]
* [Jest]
* [Enzyme]
* [Dockerfile]

Install dependencies

```bash
yarn 
```

#### Run the dev server

```bash
yarn start
```
Running this command the project is at http://localhost:8080/.


#### Run tests

```bash
yarn test
```

#### Build for production

```bash
yarn build
```

#### Build docker image (previously you need to build the app)

```bash
docker-compose build
```

#### Run docker image

```bash
docker-compose up
```
Running this command the project is at http://localhost:4000/.
