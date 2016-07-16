# Tic-Tac-Toe

Starter board and Redux-based approach for a 5x5 Tic-Tac-Toe game. Uses only functional stateless components to create a game board, and used negative space to present the game board tiles. Does not include computer player or implement the Minimax algorithm. This is just a spike to try out a new React boilerplate.

Inspiration:
- https://github.com/DimitriMikadze/express-react-redux-starter
- https://github.com/jasonrobertfox/tictactoe/
- https://github.com/andrewngu/sound-redux/

## Installation

Clone Repo

````
git clone git@github.com:jhabdas/tictactoe.git
````

Install dependencies

````
cd tic-tac-toe

npm i
````

### Start development server with hot reloading

````
npm run dev
````

### Testing

Run test once

````
npm run test
````

Test watch

````
npm run test:watch
````

### Linting

For linting we're using ESLint with a modified Airbnb Eslint config

````
npm run lint
````

### Production

Build for production

````
npm run build
````

Start production server

````
npm start
````

Requires pm2 for production server. Install it on globally with 'npm i -g pm2'.
