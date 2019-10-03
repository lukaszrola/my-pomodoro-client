

# my-pomodoro-client

Purpose of this application is efficient learning of new words during workday. Application is based on on two methods:

* **`Pomodoro`** - method to efficient work in short iterations
  * https://en.wikipedia.org/wiki/Pomodoro_Technique
* **`Supememo`** - method to learning new thing in most effective way
  * https://en.wikipedia.org/wiki/SuperMemo

## Aplication available  on Heroku
Newest version of application is deployed on heroku:
* https://my-pomodoro-client.herokuapp.com/
---

## Run application locally
Application works correctly only with Backend Service
* **`my-pomodoro-words`**: https://github.com/lukaszrola/my-pomodoro-words

Before run application localy there is need to provide environment variable:
* **`$REACT_APP_BACKEND_URL`**=url of **my-pomodoro-words**

## npm operations
### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Run unit test

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

### `docker-build`

Build docker image `rolalukasz1992/my-pomodoro-client`

---

## Run application in docker container
There are two possibilities:
1. Build docker image from source code:
    * `npm docker-build`
    * provide `$REACT_APP_BACKEND_URL` during container start
    * expose port `3000`
2. Use `docker-compose`
    * checkout repository https://github.com/lukaszrola/my-pomodoro-docker-configuration
    * Execute: `docker-compose up`

---
## How to use application
### 1. Set time of pomodoro
![picture alt](./application-screens/TimeProvider.png)

### 2. Start doing yur tasks till time runs out
![picture alt](application-screens/Timer.png)

### 3. When time is finished choose type of questions
![picture alt](application-screens/CategoryChooser.png)

### 4. Answer to questions
![picture alt](application-screens/Questions.png)

### 5. Start next iteration