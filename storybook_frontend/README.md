# Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

## Features

- **Lightweight**: No heavy UI frameworks - uses only vanilla CSS and React
- **Modern UI**: Clean, responsive design with KAVIA brand styling
- **Fast**: Minimal dependencies for quick loading times
- **Simple**: Easy to understand and modify

## Getting Started

In the project directory, you can run:

### `npm start`

Runs Storybook in development mode on port 3000, binding to 0.0.0.0 (for container health checks).  
Open http://localhost:3000 to view it in your browser.

### `npm run start:storybook`

Alias to start Storybook on port 3000.

### `npm run start:app`

Runs the original CRA dev server on port 3300 to avoid conflicts with Storybook.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build-storybook`

Builds Storybook for production.

### `npm run build`

Builds the CRA app for production to the `build` folder.

## Customization

### Colors

The main brand colors are defined as CSS variables in `src/App.css`.

### Components

This template uses pure HTML/CSS components instead of a UI framework. You can find component styles in `src/App.css`. 

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
