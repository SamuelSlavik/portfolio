import React, {Component} from "react"
import {BrowserRouter, Link, Switch, Route, NavLink} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

import PersonalInformation from "../components/aboutMe/PersonalInformation";
import FrontEndSkills from "../components/aboutMe/FrontEndSkills";
import BackEndSkills from "../components/aboutMe/BackEndSKills";

class AboutMe extends Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className={"sectionHeader"}>
                    <h2 data-aos={"fade-up"}>Something <span className={"text--pink"}>About Me</span></h2>
                </div>
                <div className={"sectionContent sectionContent--dark"}>
                    <PersonalInformation/>
                    <div className={"aboutMeSkills"}>
                        <FrontEndSkills/>
                        <BackEndSkills/>
                    </div>
                    <div className={"aboutMeButtonWrapper"} data-aos="zoom-in" data-aos-offset="50">
                        <HashLink className={"anchor"} to={"/contact#navigation"}>Text me!</HashLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe