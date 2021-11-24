import React, {Component} from "react"

import kocopywriter from '../../images/kocopywriter/project-kocopywriter-2.png'
import CaseStudyHeader from "./CaseStudyParts/CaseStudyHeader";

class Kocopywriter extends Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className={"sectionHeader"} id={"title"}>
                    <h2 data-aos="fade-up">
                      <a href={"http://kocopywriter.cz/"} target={"_blank"}>Kocopywriter<span className={"text--pink"}>.cz</span></a>
                    </h2>
                </div>
                <div className={"sectionContent sectionContent--dark"}>
                    <CaseStudyHeader
                        headerImage={kocopywriter}
                        url={"http://kocopywriter.cz/"}
                        HTML={true}
                        CSS={true}
                        JavaScript={true}
                        JQuery={true}
                        PHP={true}
                    />
                </div>
            </div>
        )
    }
}

export default Kocopywriter