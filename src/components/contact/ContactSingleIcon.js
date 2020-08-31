import React from "react";

function ContactSingleIcon(props) {
    return (
        <a className={"iconLink"} href={props.url} target="_blank" rel="noopener noreferrer">
            <i className={"fa fa-3x " + props.iconName} aria-hidden="true"/>
        </a>
    )
}

export default ContactSingleIcon