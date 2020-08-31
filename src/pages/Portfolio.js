import React, {Component} from "react"

import SingleProject from "../components/portfolio/SingleProject";

// images of single projects
import kocopywriter from '../images/project-kocopywriter-2.png'
import colloquium from '../images/project-colloquium.jpg'
import alucasting from '../images/project-aluCasting.jpg'

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
                            headline={"Kocopywriter.cz"}
                            id={"kocopywriter"}
                            aos={"fade-right"}
                            anchorHref={"http://kocopywriter.cz/"}
                            image={kocopywriter}
                            aboutProject={"Portfolio of stuttering Czech copywriter Vojtěch Hulinský"}
                            servicesProvided={"Front-end development, Web administration"}
                            technologiesUsed={"JavaScript, JQuery, TypedJS, Ajax, HTML, CSS, Bootstrap"}
                        />
                        {/*
                        <SingleProject
                            headline={"Colloquiumsk.com"}
                            id={"colloquium"}
                            aos={"fade-left"}
                            anchorHref={"https://colloquiumsk.com/"}
                            image={colloquium}
                            aboutProject={"From scratch fully developed custom WordPress theme for a international organisation"}
                            servicesProvided={"Custom WordPress theme development, Website development, Web administration"}
                            technologiesUsed={"JavaScript, JQuery, PHP, SQL, CMS WordPress, HTML, CSS"}
                        />
                        <SingleProject
                            headline={"Alu-casting.cz"}
                            id={"aluCasting"}
                            aos={"fade-right"}
                            anchorHref={"https://alu-casting.cz/"}
                            image={alucasting}
                            aboutProject={"Simple website developed according to the given design with implementation of WordPress CMC system"}
                            servicesProvided={"Custom WordPress theme development, Website development"}
                            technologiesUsed={"JavaScript, PHP, SQL, CMS WordPress, HTML, SCSS"}
                        />*/}

                        {/*
                        <div className={"portfolioSingle"}>
                            <div className="container">
                                <a className="button" href="#popup"><img alt={"project Kopcoywriter.cz"} src={kocopywriter} /></a>
                                <div className="popup" id="popup">
                                    <a className="popup__close" href="#!">X</a>
                                    <div className={"popupInner"}>
                                        <h2 className={"popupHeadline"}><a href={"http://kocopywriter.cz/"} target={"_blank"}>Kocopywriter.cz</a></h2>
                                        <img alt={"project Kopcoywriter.cz"} src={kocopywriter} />
                                        <h3>About project:</h3>
                                        <p>lorem ipsum</p>
                                        <h3>Services provided:</h3>
                                        <p>lorem ipsum</p>
                                        <h3>Technologies used:</h3>
                                        <p>lorem ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                    </div>
                    <div className={"sectionHeader"} data-aos="zoom-in" data-aos-offset="50">
                        <h2 data-aos="fade-up">Currently under <span className={"text--pink"}>construction</span></h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio