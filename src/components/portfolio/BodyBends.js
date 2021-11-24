import React, {Component} from "react"

import bodyBends from '../../images/bodybends/project-bodybends.png'
import CaseStudyHeader from "./CaseStudyParts/CaseStudyHeader";

class BodyBends extends Component{
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
            <a href={"https://bodybends.com/"} target={"_blank"}>Bodybends<span className={"text--pink"}>.sk</span></a>
          </h2>
        </div>
        <div className={"sectionContent sectionContent--dark"}>
          <CaseStudyHeader
            headerImage={bodyBends}
            url={"https://bodybends.com/"}
            HTML={true}
            SCSS={true}
            JavaScript={true}
            PHP={true}
          />
        </div>
      </div>
    )
  }
}

export default BodyBends