import React from "react"

import backEnd from "../../images/back-end.png";

function BackEndSkills() {
    return (
        <div className={"aboutMeSkillsSection aboutMeBackend"} data-aos={"fade-left"}>
            <div className={"aboutMeSkillsContentWrapper"}>
                <img alt={"BackEnd"} src={backEnd}/>
                <div className={"aboutMeSkillsContent"}>
                    <h2 className={"aboutMeSkillsHeadline"}><span className={"text--pink"}>BackEnd</span> Skills</h2>
                    <p>
                        Good website needs good BackEnd.<br/>
                        Extending my knowledge with PHP and SQL gave me the ability to develop for you good and secure BackEnd structures.
                    </p>
                    <p>
                        Even setting up CMS systems like Wordpress and developing Custom Themes is no problem for me
                    </p>
                    <p>
                        On top of this, I have basic skill set in Python and various Graphics editors. You never know when it might be helpful :)
                    </p>
                    <img className={"mobileDisplayImage"} alt={"Backend Icon"} src={backEnd}/>
                </div>
            </div>
        </div>
    )
}

export default BackEndSkills