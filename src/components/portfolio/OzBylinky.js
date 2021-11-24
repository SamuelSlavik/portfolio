import React, {Component} from "react"

import ozbylinky from '../../images/ozbylinky/ozbylinky.png'
import CaseStudyHeader from "./CaseStudyParts/CaseStudyHeader";

class OzBylinky extends Component{
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
                      <a href={"https://ozbylinky.sk/"} target={"_blank"}>OZ Bylinky<span className={"text--pink"}>.sk</span></a>
                      </h2>
                </div>
                <div className={"sectionContent sectionContent--dark"}>
                    <CaseStudyHeader
                        headerImage={ozbylinky}
                        url={"https://ozbylinky.sk/"}
                        HTML={true}
                        SCSS={true}
                        JavaScript={true}
                        PHP={true}
                        SQL={true}
                        WordPress={true}
                    />
                </div>
            </div>
        )
    }
}

export default OzBylinky