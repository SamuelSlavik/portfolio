import React, {Component} from "react"

import SingleProject from "../components/portfolio/SingleProject";

// images of single projects
import kocopywriter from '../images/kocopywriter/project-kocopywriter-2.png'
import seminar from '../images/seminars/seminar.png'
import ozbylinky from '../images/ozbylinky/ozbylinky.png'
import javorina from '../images/javorina/project-javorina.png'
import bodyBends from '../images/bodybends/project-bodybends.png'

class Portfolio extends Component{
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className={"sectionHeader"} >
                    <h2 data-aos="fade-up">My Latest <span className={"text--pink"}>Projects</span></h2>
                </div>
                <div className={"sectionContent sectionContent--dark"}>
                    <div className={"portfolioWrapper"}>
                        <SingleProject
                            url={"/portfolio/seminars#navigation"}
                            aos={"fade-right"}
                            image={seminar}
                        />
                        <SingleProject
                          url={"/portfolio/bodybends#navigation"}
                          aos={"fade-left"}
                          image={bodyBends}
                        />
                        <SingleProject
                            url={"/portfolio/kocopywriter#navigation"}
                            aos={"fade-right"}
                            image={kocopywriter}
                        />
                        <SingleProject
                          url={"/portfolio/javorina#navigation"}
                          aos={"fade-left"}
                          image={javorina}
                        />
                        <SingleProject
                            url={"/portfolio/ozbylinky#navigation"}
                            aos={"fade-right"}
                            image={ozbylinky}
                        />
                    </div>
                    <div className={"sectionHeader"} data-aos="zoom-in" data-aos-offset="50">
                        <p data-aos="fade-up">Currently under <span className={"text--pink"}>construction</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio