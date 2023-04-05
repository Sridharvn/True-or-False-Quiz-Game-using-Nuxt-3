# True or False Quiz Game

This is a True or False Quiz Game built using Nuxt. The game consists of a series of questions with two possible answers: True or False. The user will be able to select an answer for each question and receive immediate feedback on whether the answer was correct or not. At the end of the game, the user will be shown their score and given the option to restart the game.

## Project setup

1. Clone the repository.

```bash
git clone https://github.com/Sridharvn/True-or-False-Quiz-Game-using-Nuxt-3
```

2. Change into the project directory.

```bash
cd True-or-False-Quiz-Game-using-Nuxt-3
```

3. Install the dependencies.

```bash
npm install
```

4. Run the development server.

```bash
npm run dev
```
## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Game Configuration

The game is configured to fetch questions from the Open Trivia Database (opentdb) API. Users can select the difficulty level of the questions by clicking on the corresponding button on the home screen.

To configure the game, modify the `TriviaApi.js` file. This file contains a `getQuestions()` function that fetches questions from the opentdb API. The function takes the following arguments:

`amount` : The number of questions to fetch (integer).
`difficulty` : The difficulty level of the questions (string). Can be one of the following values: easy, medium, or hard.

Example:

```javascript
import axios from 'axios'

const API_URL = 'https://opentdb.com/api.php'

export default {
  getQuestions(amount, difficulty) {
    const params = {
      amount: amount,
      type: 'boolean',
      difficulty: difficulty
    }
    return axios.get(`API_URL+?amount=${amount}&difficulty=${difficulty}&type=${type}`)
      .then(response => response.data.results)
  }
}
```

## Deploying to Production

To build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

This will create a `dist` directory containing the production-ready files. You can then upload these files to your web server or hosting provider.

## Contributing

If you want to contribute to this project, you are more than welcome to submit a pull request. Before submitting your pull request, please make sure that your changes pass the linter by running the following command:

```bash
npm run lint
```



<!-- ## License

This project is licensed under the MIT License. See the `LICENSE` file for details. -->
