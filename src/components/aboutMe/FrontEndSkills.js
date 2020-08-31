import React from "react"

import frontEnd from "../../images/front-end.png";

function FrontEndSkills() {
    return (
        <div className={"aboutMeSkillsSection aboutMeFrontend"} data-aos={"fade-right"}>
            <div className={"aboutMeSkillsContentWrapper"}>
                <div className={"aboutMeSkillsContent"}>
                    <h2 className={"aboutMeSkillsHeadline"}><span className={"text--pink"}>FrontEnd</span> Skills</h2>
                    <p>
                        My favourite language, and the one, in which I am skilled the most is JavaScript.
                        Writing code using React.js or just pure vanilla JavaScript is my cup of tea.
                        However, if the situation needs it, I am also familiar with JQuery or TypeScript.
                    </p>
                    <p>
                        HTML, CSS. Every FrontEnd developer has to master this basic web technologies.
                        It is not different in my case either. Writing clean code using HTML5 and SCSS is no match for me.
                    </p>
                    <p>
                        Combining above mentioned with my priorities of fast architecture and responsive design gives you
                        the perfect start for your next project.
                    </p>
                    <img className={"mobileDisplayImage"} alt={"FrontEnd Icon"} src={frontEnd}/>
                </div>
                <img alt={"FrontEnd Icon"} src={frontEnd}/>
            </div>
        </div>
    )
}

export default FrontEndSkills