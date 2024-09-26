<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Getting Started with Create Vite@latest
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# React JS Live Dashboard
It is an End to End Project. Uses [React-ApexCharts.js](https://apexcharts.com/react-chart-demos/) for visualizing data. Data used in this project is dynamic crypto market data. It is being fetched from [coingeko API](https://www.coingecko.com/en/api/documentation).


# Setting up for dashboard
Before you begin, ensure you have the following installed:

Node.js (version 21.5.0)
npm (comes with Node.js)
A code editor (e.g., VSCode)


# Install dependencies:

npm install or npm i


# Running the Dashboard

npm run dev

The dashboard will be available at http://localhost:5173/ -->


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <style>
    body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f4f4f4;
  color: #333;
  margin: 0;
  padding: 0;
}
.container {
  width: 80%;
  margin: 20px auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
h1, h2 {
  color: #333;
}
a {
  color: #007BFF;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
ul {
  list-style-type: disc;
  padding-left: 20px;
}
pre {
  background: #f4f4f4;
  padding: 10px;
  border-left: 4px solid #007BFF;
  overflow-x: auto;
}
.image-gallery {
  display: flex;
  gap: 20px;
  margin: 20px 0;
}
.image-gallery img {
  width: 300px;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
  </style>
</head>
<body>
  <div class="container">
    <h1>React + Vite Dashboard</h1>
    <p>This template provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some ESLint rules.</p>
    <h2>Available Plugins</h2>
    <ul>
      <li><a href="https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md">@vitejs/plugin-react</a>: Uses <a href="https://babeljs.io/">Babel</a> for Fast Refresh.</li>
      <li><a href="https://github.com/vitejs/vite-plugin-react-swc">@vitejs/plugin-react-swc</a>: Uses <a href="https://swc.rs/">SWC</a> for Fast Refresh.</li>
    </ul>
    <h2>Getting Started with Create Vite@latest</h2>
    <p>This project was bootstrapped with <a href="https://github.com/facebook/create-react-app">Create React App</a>.</p>
    <h2>React JS Live Dashboard</h2>
    <p>This is an end-to-end project that uses <a href="https://apexcharts.com/react-chart-demos/">React-ApexCharts.js</a> for visualizing dynamic crypto market data. The data is fetched from the <a href="https://www.coingecko.com/en/api/documentation">Coingecko API</a>.</p>
    <h2>Prerequisites</h2>
    <ul>
      <li>Node.js (version 21.5.0)</li>
      <li>npm (comes with Node.js)</li>
      <li>A code editor (e.g., VSCode)</li>
    </ul>
    <div class="image-gallery">
      <img src="/src/assets/p3.png" alt="Image 1">
      <img src="/src/assets/p2.png" alt="Image 2">
      <img src="/src/assets/p1.png" alt="Image 3">
    </div>
    <h2>Installation</h2>
    <pre><code>npm install</code></pre>
    <p>or</p>
    <pre><code>npm i</code></pre>
    <h2>Running the Dashboard</h2>
    <pre><code>npm run dev</code></pre>
    <p>The dashboard will be available at <a href="http://localhost:5173">http://localhost:5173</a>.</p>
  </div>
</body>
</html>
