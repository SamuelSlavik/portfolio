import React from 'react';
import {BrowserRouter, Link, Switch, Route, NavLink} from "react-router-dom"

import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import Wallpaper from "./components/Wallpaper";
import Navigation from "./components/Navigation";


function App() {
    return (
        <div className="app">
            <Wallpaper/>
            <div>
                <Navigation />
                <Switch className={"innerContent"}>
                    <Route exact path="/">
                        <AboutMe />
                    </Route>
                    <Route exact path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default App;
