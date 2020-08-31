import React, {Component} from "react";

class ContactForm extends Component{
    constructor() {
        super();
        this.state = {
            inputName: "",
            inputEmail: "",
            inputMessage: "",
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target;
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    handleSubmit (event) {
        event.preventDefault();
        const templateId = 'template_4PgDtMwD';

        this.sendFeedback(templateId, {message_html: this.state.inputMessage, from_name: this.state.inputName, reply_to: this.state.inputEmail})
    }

    sendFeedback (templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            alert('Email successfully sent!')
        })
            .catch(err => console.error('Something went wrong', err))
    }

    render() {
        return (
            <div className={"contactFormDiv"} data-aos="fade-up">
                <form className={"contactForm"}>
                    <input
                        type={"text"}
                        name={"inputName"}
                        value={this.state.inputName}
                        onChange={this.handleChange}
                        placeholder={"Name"}
                    />
                    <input
                        type={"text"}
                        name={"inputEmail"}
                        value={this.state.inputEmail}
                        onChange={this.handleChange}
                        placeholder={"Email"}
                    />
                    <input
                        type={"text"}
                        name={"inputMessage"}
                        value={this.state.inputMessage}
                        onChange={this.handleChange}
                        placeholder={"Your Message"}
                    />
                    <input
                        type={"submit"}
                        name={"inputSubmit"}
                        placeholder={"Send"}
                        value={"Send"}
                        className={"contactSubmit"}
                        onClick={this.handleSubmit}
                    />
                </form>
                {console.log(this.state.inputName)}
            </div>
        )
    }
}

export default ContactForm