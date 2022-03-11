# React Tic Tac Toe

[Tic-tac-toe](https://simple-sifu.github.io/react_tic_tac_toe/)

## Webpack - using jsx requires changes to webpack.config.js

Webpack doesnt know to resolve .jsx files implicitly. You can include .jsx in the extensions that webpack should resolve without
explicit declaration.

`resolve: { extensions: ['.js', '.jsx'] }`

## script commands

npm run build -- hotfix loading
npm start -- will host at localhost:3010

## Immutability is important

The main benefit of immutability is that it helps you build pure components in React. Immutable data can easily determine if changes have been made, which helps to determine when a component requires re-rendering.

## Function component

In React, function components are a simpler way to write components that only contain a render method and don’t have their own state. Instead of defining a class which extends React.Component, we can write a function that takes props as input and returns what should be rendered. Function components are less tedious to write than classes, and many components can be expressed this way.

## Wrapping upCongratulations! You’ve created a tic-tac-toe game that:

1. Lets you play tic-tac-toe,
2. Indicates when a player has won the game,
3. Stores a game’s history as a game progresses,
4. Allows players to review a game’s history and see previous versions of a game’s board.

# react_adventure
