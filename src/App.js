import React from 'react';
import {BrowserRouter, Link, Switch, Route, NavLink} from "react-router-dom"

import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import Wallpaper from "./components/Wallpaper";
import Navigation from "./components/Navigation";
import Kocopywriter from "./components/portfolio/Kocopywriter";
import BodyBends from "./components/portfolio/BodyBends";
import Seminars from "./components/portfolio/Seminars";
import ApplicationLetter from "./pages/ApplicationLetter";
import CV from "./pages/CV";
import CVen from "./pages/CVen";
import CoverLetter from "./pages/CoverLetter";
import OzBylinky from "./components/portfolio/OzBylinky";
import Javorina from "./components/portfolio/Javorina";


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
                    <Route exact path="/portfolio/bodybends">
                        <BodyBends />
                    </Route>
                    <Route exact path="/portfolio/kocopywriter">
                        <Kocopywriter />
                    </Route>
                    <Route exact path="/portfolio/seminars">
                        <Seminars />
                    </Route>
                    <Route exact path="/portfolio/javorina">
                        <Javorina />
                    </Route>
                    <Route exact path="/portfolio/ozbylinky">
                        <OzBylinky />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/CV">
                        <CV />
                    </Route>
                    <Route exact path="/CVen">
                        <CVen />
                    </Route>
                    <Route exact path="/applicationLetter">
                        <ApplicationLetter />
                    </Route>
                    <Route exact path="/coverLetter">
                        <CoverLetter />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default App;
