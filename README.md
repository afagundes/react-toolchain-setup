# React Toolchain Setup

Source: https://medium.com/@JedaiSaboteur/creating-a-react-app-from-scratch-f3c693b84658

## Basic Project Structure

<pre>
.
+-- public
+-- src
</pre>

## App Entry point

<pre>
.
+-- public
    +-- index.html
</pre>

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>React Starter</title>
</head>
<body>
    <div id="root"></div>
    <noscript>
        You need to enable JavaScript to run this app.
    </noscript>
    <script src="../dist/bundle.js"></script>
</body>
</html>

```

## Compiler - Babel

```shell
npm install --save-dev @babel/core@7.1.0 @babel/cli@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0
```

### Configuration

<pre>
.
+-- .babelrc
</pre>

```json
{
    "presets": ["@babel/env", "@babel/preset-react"]
}
```

## Webpack

```shell
npm install --save-dev webpack@4.19.1 webpack-cli@3.1.1 webpack-dev-server@3.1.8 style-loader@0.23.0 css-loader@1.0.0 babel-loader@8.0.2
```

### Configuration

<pre>
.
+-- webpack.config.js
</pre>

```js
const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|browser_components)/,
                loader: "babel-loader",
                options: { presets: ["@babel/env"] }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: 3000,
        publicPath: "http://localhost:3000/dist/",
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
```

## React

```shell
npm install react@18.2.0 react-dom@18.2.0
```

### Entry point

<pre>
.
+-- src
    +-- index.js
</pre>

```js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

root.render(<App />);
```

## Package.json

Start script:

```json
"scripts": {
    "start": "webpack-dev-server --mode development",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

## Hot Reload

```shell
npm install react-hot-loader@4.3.11
```

<pre>
.
+-- src
    +-- App.js
</pre>

```js
import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> Hello, World! </h1>
            </div>
        );
    }
}

export default hot(module)(App);
```

## Further Exploring

- https://www.toptal.com/react/webpack-react-tutorial-pt-1
- https://github.com/paradoxinversion/react-starter

