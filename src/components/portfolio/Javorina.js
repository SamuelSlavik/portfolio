import React, {Component} from "react"

import javorina from '../../images/javorina/project-javorina.png'
import CaseStudyHeader from "./CaseStudyParts/CaseStudyHeader";

class Javorina extends Component{
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div className={"sectionHeader"} id={"title"}>
          <h2 data-aos="fade-up"><a href={"http://pzjavorina.sk/"} target={"_blank"}>PZ Javorina<span className={"text--pink"}>.sk</span></a></h2>
        </div>
        <div className={"sectionContent sectionContent--dark"}>
          <CaseStudyHeader
            headerImage={javorina}
            url={"http://pzjavorina.sk/"}
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

export default Javorina