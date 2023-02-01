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
npm install --save-dev @babel/core@7.20.12 @babel/cli@7.20.7 @babel/preset-env@7.20.2 @babel/preset-react@7.18.6
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
npm install --save-dev webpack@5.75.0 webpack-cli@5.0.1 webpack-dev-server@4.11.1 style-loader@3.3.1 css-loader@6.7.3 babel-loader@9.1.2
```

### Basic Configuration

<pre>
.
+-- webpack.config.js
</pre>

```js
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|browser_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.(png|jpg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /.svg$/,
                type: 'asset/inline'
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    devServer: {
        open: true,
        port: 3000,
        compress: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        client: {
            overlay: {
                errors: true,
                warnings: false,
            }
        }
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

```json
"scripts": {
    "start": "webpack-dev-server --mode development",
    "build": "webpack --mode development",
    "test": "echo \"Error: no test specified\" && exit 1"
},
```

## Hot Reload

```shell
npm install react-hot-loader@4.3.11
```

## Main component (with hot reload)

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

## Separating Webpack's configuration for development and production

Before all, we need to install the **webpack-merge** package:

```shell
npm install --save-dev webpack-merge@5.8.0
``` 

Then create these files:

<pre>
.
+-- webpack.common.js
+-- webpack.dev.js
+-- webpack.prod.js
</pre>

### webpack.common.js

```js
const path = require('path');

module.exports = {
    entry: {
        app: './src/index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|browser_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.(png|jpg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /.svg$/,
                type: 'asset/inline'
            }
        ]
    },
    resolve: { 
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
        clean: true,
    },
};
```

### webpack.dev.js

```js
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        port: 3000,
        compress: true,
        static: path.join(__dirname, 'public'),
        client: {
            overlay: {
                errors: true,
                warnings: false,
            }
        }
    },
});
```

### webpack.prod.js

```js
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
});
```

### Update package.json

```json
  "scripts": {
    "start": "webpack serve --open --config webpack.dev.js",
    "build": "webpack --config webpack.prod.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

## Next steps

- [ ] Add [ESLint](https://eslint.org/)
- [ ] Add [Jest](https://jestjs.io/)
- [ ] Make Webpack resolve the <code>import React from 'react'</code> from jsx files
- [ ] Make the hot reload work without having to add <code>hot(module)(App)</code> in the main component
- [ ] Add a template for **public/index.html** file using the [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin#options)
- [ ] Maybe add a CSS preprocessor for SASS and Tailwind CSS

## Further Exploring

- https://www.toptal.com/react/webpack-react-tutorial-pt-1
- https://github.com/paradoxinversion/react-starter
- https://beta.reactjs.org/learn/start-a-new-react-project
