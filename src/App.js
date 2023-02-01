import React, { Component } from "react";
import { hot } from "react-hot-loader";
import GreetingsFunctional from "./components/GreetingsFunctional";
import Image from "./components/Image";
import "./App.css";
import SVGViewer from "./components/SVGViewer";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> Hello, World! </h1>
                <GreetingsFunctional name="the developer" />
                <Image />
                <SVGViewer />
            </div>
        );
    }
}

export default hot(module)(App);
