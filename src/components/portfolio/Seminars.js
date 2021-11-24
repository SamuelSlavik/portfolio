import React, {Component} from "react"

import seminar from '../../images/seminars/seminar.png'
import seminarContent from '../../images/seminars/seminarContent.png'
import seminarFull from '../../images/seminars/seminarFull.png'
import seminarProfile from '../../images/seminars/seminarProfile.png'
import CaseStudyHeader from "./CaseStudyParts/CaseStudyHeader";
import {HashLink} from "react-router-hash-link";

class Seminars extends Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className={"sectionHeader"} id={"title"}>
                    <h2 data-aos="fade-up">Choose the right <span className={"text--pink"}>path!</span></h2>
                </div>
                <div className={"sectionContent sectionContent--dark"}>
                    <CaseStudyHeader
                        headerImage={seminar}
                        url={"https://github.com/SamuelSlavik/seminars"}
                        ReactJS={true}
                        SCSS={true}
                        MongoDB={true}
                        ExpressJS={true}
                        NodeJS={true}
                    />
                    <div className={"caseStudyAbout"} data-aos="zoom-in">
                        <div className={"caseStudyAboutContent"}>
                            <h2 className={"headline--medium"}><span className={"text--pink"}>About</span> the Project:</h2>
                            <p>
                                There are not a lot of apps aimed on helping students with their everyday life.
                                This problem tortured also students in my Alma Mater, but no more!
                            </p>
                            <p>
                                I decided to use up my skills and help my school and younger students by developing app that will help them to choose their further study subjects.
                                And here it is, let's take a brief look on it:
                            </p>
                        </div>
                        <img className={"caseStudyAboutImage"} alt={"seminarsFull"} src={seminarFull} />
                    </div>
                    <div className={"caseStudyAbout"} data-aos="zoom-in">
                        <img className={"caseStudyAboutImage caseStudySeminarProfile"} alt={"seminarsProfile"} src={seminarProfile} />
                        <div className={"caseStudyAboutContent caseStudySeminarProfileContent"}>
                            <h2 className={"headline--medium"}>The <span className={"text--pink"}>Task</span></h2>
                            <p>
                                The need of such an app was really knocking on the door. Previously, this was all done in a printed paper form.
                                Lot of rewriting, no order, no helping features.
                            </p>
                            <p>
                                On the one hand task was very simple, but on the other, it was opened to different solutions with different features.
                            </p>
                            <p>
                                Main assignment was simple app with registration and login system for students, dashboard with an offer of all the subjects for studying and
                                simple administration with the function of exporting all the collected data. However, I decided to use this as my capstone project of my future portfolio.
                            </p>
                        </div>
                    </div>
                    <div className={"caseStudyAbout"} data-aos="zoom-in">
                        <div className={"caseStudyAboutContent"}>
                            <h2 className={"headline--medium"}>The <span className={"text--pink"}>Solution</span></h2>
                            <p>
                                After some research I decided to build the whole app on MERN stack, using ReactJS in frontEnd part and
                                NodeJS, ExpressJS and MongoDB in the app's backEnd parts. This guaranteed fast and clean environment.
                            </p>
                            <p>
                                Clean code written using common developing structures is covering as many needs of students and admins, to make the App
                                re-usable for any other school and easy to understand for all other further developers
                            </p>
                            <p>
                                The design of a content based App was took from my personal website. It is not anything special, but with the usage of student slang,
                                it creates familiar UI for it's users.
                            </p>
                        </div>
                        <img className={"caseStudyAboutImage"} alt={"seminarsContent"} src={seminarContent} />
                    </div>
                    <div>
                    </div>
                    <div className={"aboutMeButtonWrapper"} data-aos="zoom-in" data-aos-offset="50">
                        <p>
                            I am sorry, but the App is accessible just for the Students and Teachers. For public, I decided to publish only some parts of the source code on GitHub.
                        </p>
                        <a className={"anchor"} target={"_blank"} href={"https://github.com/SamuelSlavik/seminars"}>Source Code</a>
                        <br/><br/><br/>
                        <p>
                            If you are interested in the project, feel free to text me, I will always find time for you :)
                        </p>
                        <HashLink className={"anchor"} to={"/contact#navigation"}>Text me!</HashLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Seminars