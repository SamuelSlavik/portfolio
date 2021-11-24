import React, {Component} from "react";

import ContactSingleIcon from "./ContactSingleIcon";

class ContactInfo extends Component{
    constructor() {
        super();
        this.state = {
            class:","
        }
    }
    render() {
        return(
            <div className={"contactInfo"} data-aos="zoom-in" data-aos-offset="50">
                <div className={"contactIcons"}>
                    <ContactSingleIcon url={"https://www.facebook.com/samuel.slavik.58"} iconName={"fa-facebook-official"}/>
                    <ContactSingleIcon url={"https://www.instagram.com/samuel.yourdeveloper/"} iconName={"fa-instagram"}/>
                    <ContactSingleIcon url={"https://www.linkedin.com/in/samuel-sl%C3%A1vik-93404316a/"} iconName={"fa-linkedin-square"}/>
                    <ContactSingleIcon url={"https://github.com/SamuelSlavik"} iconName={"fa-github-square"}/>
                </div>
            </div>
        )
    }
}

export default ContactInfo