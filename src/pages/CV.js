import React, {Component} from "react"
import {BrowserRouter, Link, Switch, Route, NavLink} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

import PersonalInformation from "../components/aboutMe/PersonalInformation";
import FrontEndSkills from "../components/aboutMe/FrontEndSkills";
import BackEndSkills from "../components/aboutMe/BackEndSKills";

class CV extends Component{
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
                    <h2 className={"lightHeading"}>Osobné údaje</h2>
                    <table className={"cvTable"}>
                        <tr>
                            <td className={"question"}>Meno a Priezvisko:</td>
                            <td className={"answer text--bold"}>Samuel Slávik</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Národnosť:</td>
                            <td className={"answer"}>Slovenská</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Telefónne číslo:</td>
                            <td className={"answer"}>+421 918 958 527</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Adresa:</td>
                            <td className={"answer"}>Makov 116, 023 56 Makov, Slovensko</td>
                        </tr>
                    </table>
                    <h2 className={"lightHeading"}>Znalosti</h2>
                    <table className={"cvTable"}>
                        <tr>
                            <td className={"question"}>Webové technológie:</td>
                            <td className={"answer"}>HTML, CSS</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Programovacie jazyky:</td>
                            <td className={"answer"}>JavaScript, C, PHP, Python(základ)</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Frameworky:</td>
                            <td className={"answer"}>ReactJS, NodeJS, ExpressJS, TypeScript, Bootstrap, JQuery, SCSS</td>
                        </tr>
                        <tr>
                            <td className={"question"}>CMS systémy:</td>
                            <td className={"answer"}>WordPress, Joomla(základ)</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Grafické editory:</td>
                            <td className={"answer"}>Affinity designer, Photoshop, Gimp, Inkscape</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Operačné systémy:</td>
                            <td className={"answer"}>Linux Ubuntu, Linux Kali, Windows</td>
                        </tr>
                    </table>

                    <h2 className={"lightHeading"}>Vzdelanie</h2>
                    <table className={"cvTable"}>
                        <tr>
                            <td className={"question"}>Obdobie (od-do):</td>
                            <td className={"answer text--bold"}>2021 - súčasnosť (vysoká škola)</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Názov školy:</td>
                            <td className={"answer"}>Vysoké učení technické v Brňe, Fakulta informačních technologií</td>
                        </tr>
                        <hr className={"mobileTrHr"}/>
                        <tr className={"mobileTr"}>
                             <td className={"question"}> </td>
                            <td className={"answer"}> </td>
                        </tr>
                        <tr>
                            <td className={"question"}>Obdobie (od-do):</td>
                            <td className={"answer text--bold"}>2012 - 2021 (stredná škola)</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Názov školy:</td>
                            <td className={"answer"}>Gymnázium Jozefa Miloslava Hurbana v Čadci, bilingválna sekcia</td>
                        </tr>
                    </table>

                    <h2 className={"lightHeading"}>Jazykové znalosti</h2>
                    <table className={"cvTable"}>
                        <tr>
                            <td className={"question"}>Materinský jazyk:</td>
                            <td className={"answer"}>Slovenský jazyk</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Ostatné jazyky:</td>
                            <td className={"answer"}>Anglický jazyk – pokročilý, C1</td>
                        </tr>
                        <tr>
                            <td className={"question"}> </td>
                            <td className={"answer"}>Nemecký jazyk – mierne pokročilý</td>
                        </tr>
                        <tr>
                            <td className={"question"}> </td>
                            <td className={"answer"}>Polský jazyk – pokročilý</td>
                        </tr>
                    </table>

                    <h2 className={"lightHeading"}>Zamestnanie</h2>
                    <table className={"cvTable"}>
                        <tr>
                            <td className={"question"}>Zamestnávateľ:</td>
                            <td className={"answer text--bold"}>MARJOV GROUP, s.r.o.</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Pozícia:</td>
                            <td className={"answer text--bold"}>Front end developer</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Obdobie (od-do):</td>
                            <td className={"answer"}>2021 - súčasnosť</td>
                        </tr>
                        <hr className={"mobileTrHr"}/>
                        <tr className={"mobileTr"}>
                            <td className={"question"}> </td>
                            <td className={"answer"}> </td>
                        </tr>
                        <tr>
                            <td className={"question"}>Zamestnávateľ:</td>
                            <td className={"answer text--bold"}>Pixelab, s.r.o</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Pozícia:</td>
                            <td className={"answer text--bold"}>Full stack developer</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Obdobie (od-do):</td>
                            <td className={"answer"}>2020 - 2021</td>
                        </tr>
                        <hr className={"mobileTrHr"}/>
                        <tr className={"mobileTr"}>
                            <td className={"question"}> </td>
                            <td className={"answer"}> </td>
                        </tr>
                        <tr>
                            <td className={"question"}>Pozícia:</td>
                            <td className={"answer text--bold"}>Freelancer - Front end developer</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Obdobie (od-do):</td>
                            <td className={"answer"}>2016 - 2019</td>
                        </tr>
                    </table>

                    <h2 className={"lightHeading"}>Osobné Projekty</h2>
                    <table className={"cvTable"}>
                        <tr>
                            <td className={"question"}>Názov projektu (obdobie):</td>
                            <td className={"answer text--bold"}>Yourdeveloper.eu (2020)</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Popis projektu:</td>
                            <td className={"answer"}>Osobné portfólio</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Popis činnosti</td>
                            <td className={"answer"}>Vytvorenie grafickej, front endovej a back endovej časti webu.</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Technoológie:</td>
                            <td className={"answer"}>ReactJS, JavaScript, HTML, SCSS</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Pozícia:</td>
                            <td className={"answer"}>Full stack developer</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Výsledná práca</td>
                            <td className={"answer"}>http://yourdeveloper.eu/</td>
                        </tr>
                        <hr className={"mobileTrHr"}/>
                        <tr className={"mobileTr"}>
                            <td className={"question"}> </td>
                            <td className={"answer"}> </td>
                        </tr>
                        <tr>
                            <td className={"question"}>Názov projektu (obdobie):</td>
                            <td className={"answer text--bold"}>Choose the right Path! (2020)</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Popis projektu:</td>
                            <td className={"answer"}>Aplikácia pre študentov stredných škol na zjednodušenie výberu predmetov.</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Popis činnosti</td>
                            <td className={"answer"}>Vytvorenie grafickej, front endovej a back endovej časti webu.</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Technoológie:</td>
                            <td className={"answer"}>ReactJS, NodeJS, ExpressJS, MongoDB, SCSS</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Pozícia:</td>
                            <td className={"answer"}>Full stack developer</td>
                        </tr>
                        <tr>
                            <td className={"question"}>Výsledná práca</td>
                            <td className={"answer"}>https://github.com/SamuelSlavik/seminars</td>
                        </tr>
                    </table>
                </div>
            </div>
        )
    }
}

export default CV