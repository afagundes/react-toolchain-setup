import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Greetings from "./components/Greetings";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1> Hello, World! </h1>
                <Greetings name="the developer" />
            </div>
        );
    }
}

export default hot(module)(App);
