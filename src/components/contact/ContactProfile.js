import React, {Component} from "react";

import profileImage from "../../images/profileUpdated2.jpg";
import ContactInfo from "./ContactInfo";

class ContactProfile extends Component{
    constructor() {
        super();
        this.state = {
            class:","
        }
    }
    render() {
        return(
            <div className={"contactProfile"} data-aos="zoom-in" data-aos-offset="50">
                <img alt={"Profile"} className={"profileImage"} src={profileImage}/>
                <div className={"profileContent"}>
                    <div className={"profileContentTop"}>
                        <p><span className={"text--blue"}>name:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Samuel Slávik</p>
                        <p><span className={"text--blue"}>email:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;samuel.slavik@protonmail.com</p>
                        <p><span className={"text--blue"}>email:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;yourdeveloper.eu@protonmail.com</p>
                    </div>
                    <div className={"profileContentTop mobileDisplayProfile"}>
                        <p><span className={"text--blue"}>name:</span><br/>Samuel Slávik</p>
                        <p><span className={"text--blue"}>email:</span><br/>samuel.slavik@protonmail.com</p>
                        <p><span className={"text--blue"}>email:</span><br/>yourdeveloper.eu@protonmail.com</p>
                    </div>
                    <div className={"profileContentBottom"}>
                        <ContactInfo/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactProfile