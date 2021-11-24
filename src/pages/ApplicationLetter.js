import React, {Component} from "react"
import {BrowserRouter, Link, Switch, Route, NavLink} from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

import PersonalInformation from "../components/aboutMe/PersonalInformation";
import FrontEndSkills from "../components/aboutMe/FrontEndSkills";
import BackEndSkills from "../components/aboutMe/BackEndSKills";

class ApplicationLetter extends Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className={"sectionHeader"}>
                    <h2 data-aos={"fade-up"}>Motivačný <span className={"text--pink"}>List</span></h2>
                </div>
                <div className={"sectionContent sectionContent--light"}>
                    <p>
                        Vážený pán personalista,
                    </p>
                    <p>
                        rozhodol som sa uchádzať o pracovnú ponuku JavaScript Front-end Developera u Vás v A-WebSys.
                    </p>
                    <p>
                        Ako budúci študent VUT v Brne si hľadám miesto ktoré by mi vytvorilo dobré zázemie pre môj budúci či už študentský
                        alebo pracovný život. Miesto, kde by som zúžitkoval a rozvíjal svoje už nadobudnuté skúsenosti a schopnosti.
                    </p>
                    <p>
                        Za sebou mám trojročné skúsenosti s web developmentom, s ktorým som či už ako freelancer alebo zamestnanec Pixelab, s.r.o.
                        vytvoril viacero zaujímavých projektov. Tie ma naučili efektívne riešiť problémy či už sámeho alebo v spolupráci s UI/UX dizajnérmi a inými developermi.
                        Mojou špecializáciou je front end development a s ním spojený ReactJS, no taktiež sú u mňa samozrejmosťou
                        aj znalosti HTML, CSS a JavaScriptu, či rôznych nástrojov ako je napríklad Git.
                        Vďaka veľmi dobrej úrovni anglického a nemeckého jazyka nemám problém ani s medzinárodnými projektami.
                    </p>
                    <p>
                        Verím, že Vás moja, možno netradičná prezentácia oslovila a som Vám otvorený pri bližšej komunikácii
                        poskynúť potrebné informácie a dokumenty či už v slovenskom alebo anglickom jazyku.
                    </p>
                    <p>
                        S pozdravom <br/>Samuel Slávik
                    </p>
                    <p>

                    </p>
                    <p>

                    </p>
                </div>
            </div>
        )
    }
}

export default ApplicationLetter