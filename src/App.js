import { hot } from "react-hot-loader";
import React, { Component } from "react";
import GreetingsFunctional from "./components/GreetingsFunctional";
import Image from "./components/Image";
import SVGViewer from "./components/SVGViewer";
import ApiFetcher from "./components/ApiFetcher";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> Hello, World! </h1>
                <GreetingsFunctional name="the developer" />
                <Image />
                <SVGViewer />
                <ApiFetcher />
            </div>
        );
    }
}

export default hot(module)(App);
