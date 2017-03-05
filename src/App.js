import React, { Component } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Overview from "./components/Overview";

class App extends Component {

     render() {
        return (
            <div className="wrapper">

                <div className="sidebar">
                    <Sidebar />
                </div>

                <div className="container">
                    <Overview />
                </div>

            </div>
        );
    }
}

export default App;