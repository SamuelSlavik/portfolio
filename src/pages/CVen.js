import React, {Component} from "react"
import {BrowserRouter, Link, Switch, Route, NavLink} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

import PersonalInformation from "../components/aboutMe/PersonalInformation";
import FrontEndSkills from "../components/aboutMe/FrontEndSkills";
import BackEndSkills from "../components/aboutMe/BackEndSKills";

class CVen extends Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className={"sectionHeader"}>
                    <h2 data-aos={"fade-up"}>Curriculum <span className={"text--pink"}>Vitae</span></h2>
                </div>
                <div className={"sectionContent sectionContent--light"}>
                    <h2 className={"lightHeading"}>Personal data</h2>
                    <table className={"cvTable"}>
                        <tr>
                            <td className={"question"}>Name and surname:</td>
                            <td className={"answer text--bold"}>Samuel Slávik</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Nationality:</td>
                            <td className={"answer"}>Slovak</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Telephone number:</td>
                            <td className={"answer"}>+421 918 958 527</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Address:</td>
                            <td className={"answer"}>Makov 116, 023 56 Makov, Slovakia</td>
                        </tr>
                    </table>
                    <h2 className={"lightHeading"}>Knowledge</h2>
                    <table className={"cvTable"}>
                        <tr>
                            <td className={"question"}>Web technologies:</td>
                            <td className={"answer"}>HTML, CSS</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Programming languages:</td>
                            <td className={"answer"}>JavaScript, PHP, C, Python(basics)</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Frameworks:</td>
                            <td className={"answer"}>ReactJS, NodeJS, ExpressJS, TypeScript, Bootstrap, JQuery, SCSS</td>
                        </tr>
                        <tr>
                            <td className={"question"}>CMS systems:</td>
                            <td className={"answer"}>WordPress, Joomla(basics)</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Graphical editors:</td>
                            <td className={"answer"}>Affinity designer, Photoshop, Gimp, Inkscape</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Operating systems:</td>
                            <td className={"answer"}>Linux Ubuntu, Linux Kali, Windows</td>
                        </tr>
                    </table>

                    <h2 className={"lightHeading"}>Education</h2>
                    <table className={"cvTable"}>
                        <tr>
                            <td className={"question"}>Period (since-to):</td>
                            <td className={"answer text--bold"}>2021 - now (university)</td>
                        </tr>
                        <tr>
                            <td className={"question"}>School:</td>
                            <td className={"answer"}>Brno University of Technology, Faculty of Information Technology</td>
                        </tr>
                        <hr className={"mobileTrHr"}/>
                        <tr className={"mobileTr"}>
                            <td className={"question"}> </td>
                            <td className={"answer"}> </td>
                        </tr>
                        <tr>
                            <td className={"question"}>Period (since-to):</td>
                            <td className={"answer text--bold"}>2012 - 2021 (high school)</td>
                        </tr>
                        <tr>
                            <td className={"question"}>School:</td>
                            <td className={"answer"}>Gymnázium Jozefa Miloslava Hurbana in Čadca, bilingual section</td>
                        </tr>
                    </table>

                    <h2 className={"lightHeading"}>Language skills</h2>
                    <table className={"cvTable"}>
                        <tr>
                            <td className={"question"}>Native language:</td>
                            <td className={"answer"}>Slovak language</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Other languages:</td>
                            <td className={"answer"}>English language - fluent, C1</td>
                        </tr>
                        <tr>
                            <td className={"question"}> </td>
                            <td className={"answer"}>German language – semi-fluent</td>
                        </tr>
                        <tr>
                            <td className={"question"}> </td>
                            <td className={"answer"}>Polish language – fluent</td>
                        </tr>
                    </table>

                    <h2 className={"lightHeading"}>Carrier</h2>
                    <table className={"cvTable"}>
                        <tr>
                            <td className={"question"}>Employer:</td>
                            <td className={"answer text--bold"}>MARJOV GROUP, s.r.o.</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Position:</td>
                            <td className={"answer text--bold"}>Front end developer</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Period (since-to):</td>
                            <td className={"answer"}>2021 - now</td>
                        </tr>
                        <hr className={"mobileTrHr"}/>
                        <tr className={"mobileTr"}>
                            <td className={"question"}> </td>
                            <td className={"answer"}> </td>
                        </tr>
                        <tr>
                            <td className={"question"}>Employer:</td>
                            <td className={"answer text--bold"}>Pixelab, s.r.o</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Position:</td>
                            <td className={"answer text--bold"}>Full stack developer</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Period (since-to):</td>
                            <td className={"answer"}>2020 - 2021</td>
                        </tr>
                        <tr>
                            <td className={"question"}> </td>
                            <td className={"answer"}> </td>
                        </tr>
                        <tr>
                            <td className={"question"}>Position:</td>
                            <td className={"answer text--bold"}>Freelancer - Front end developer</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Period (since-to):</td>
                            <td className={"answer"}>2016 - 2019</td>
                        </tr>
                    </table>

                    <h2 className={"lightHeading"}>Personal Projects</h2>
                    <table className={"cvTable"}>
                        <tr>
                            <td className={"question"}>Title (period):</td>
                            <td className={"answer text--bold"}>Yourdeveloper.eu (2020)</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Description:</td>
                            <td className={"answer"}>Personal portfolio</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Activity</td>
                            <td className={"answer"}>Development of graphics, front end and back end parts of the website.</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Technologies:</td>
                            <td className={"answer"}>ReactJS, JavaScript, HTML, SCSS</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Position:</td>
                            <td className={"answer"}>Full stack developer</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Final Work</td>
                            <td className={"answer"}>http://yourdeveloper.eu/</td>
                        </tr>
                        <hr className={"mobileTrHr"}/>
                        <tr className={"mobileTr"}>
                            <td className={"question"}> </td>
                            <td className={"answer"}> </td>
                        </tr>
                        <tr>
                            <td className={"question"}>Title (period):</td>
                            <td className={"answer text--bold"}>Choose the right Path! (2020)</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Description:</td>
                            <td className={"answer"}>App for students to help them with choosing further studying subjects.</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Activity</td>
                            <td className={"answer"}>Development of graphics, front end and back end parts of the website.</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Technologies:</td>
                            <td className={"answer"}>ReactJS, NodeJS, ExpressJS, MongoDB, SCSS</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Position:</td>
                            <td className={"answer"}>Full stack developer</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Final Work</td>
                            <td className={"answer"}>https://github.com/SamuelSlavik/seminars</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default CVen