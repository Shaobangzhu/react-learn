# Tic-Tac-Toe Using Create React App

This project is a simple implementation of the classic Tic-Tac-Toe game built with React. It is designed to demonstrate the use of React hooks and component-based architecture.

## Overview
This project showcases:
- Component-based design with React.
- State management using the `useState` hook.
- Modular and reusable components (`Board` and `Square`).
- CSS styling for layout and design.

---

## Features
- Players alternate between "X" and "O".
- The board is rendered dynamically based on the game state.
- Clean and simple UI with intuitive interactions.

---

## Project Structure

Each file serves a specific purpose:
- **App.jsx**: The root component that renders the `Board` component.
- **Board.jsx**: Contains the game board logic and manages the state of the squares.
- **Square.jsx**: Represents an individual square on the board, displaying its state and handling click events.
- **index.js**: The main entry point that renders the app into the DOM.
- **styles.css**: Contains the styles for the Tic-Tac-Toe game layout and components.
- **package.json**: Lists project dependencies and provides scripts for development and production builds.
- **README.md**: Documentation for the project, including setup, usage, and structure.

## Installation
To set up the project locally:

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd react-learn
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm start

# Usage
Once the development server is running:

1. Open http://localhost:3000 in your browser.
2. Click on squares to play the game, alternating between "X" and "O".

# License
This project is provided under the default license associated with Create React App. Modify the LICENSE file as needed.