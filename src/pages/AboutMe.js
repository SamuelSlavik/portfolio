import React, {Component} from "react"

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
                </div>
            </div>
        )
    }
}

export default AboutMe