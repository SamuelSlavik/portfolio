import React, {Component} from "react"

import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

class Contact extends Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <div className={"sectionHeader"}>
                    <h2 data-aos="fade-up">Let's <span className={"text--pink"}>Talk</span></h2>
                </div>
                <div className={"sectionContent sectionContent--dark"}>
                    <ContactForm/>
                    <ContactInfo/>
                </div>
            </div>
        )
    }
}

export default Contact