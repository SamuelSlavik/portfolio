import React from "react"

function PersonalInformation() {
    return (
        <div className={"aboutMePersonal"} data-aos={"fade-up"}>
            <img alt={"logo"} src={"./images/weblogo.svg"}/>
            <div className={"aboutMePersonalContent"}>
                <p>
                    Hello, I'm friendly, Slovakia based WebDeveloper
                    specialized on FrontEnd Development and crafting
                    userFriendly JavaScript apps.
                </p>
                <p>
                    In addition to the passion for developing applications and websites for you,
                    I am also interested in Mathematical and Physical sciences which gives me great support to
                    learn new skills and always be up to date with current trends.
                </p>
            </div>
        </div>
    )
}

export default PersonalInformation