import React from "react";
import { HashLink } from 'react-router-hash-link';

function SingleProject(props) {
    return (
        <div className={"portfolioSingle"} data-aos={props.aos}>
            <div className="container">
                <HashLink className="button" to={props.url}><img alt={props.image} src={props.image} /></HashLink>
            </div>
        </div>
    )
}

export default SingleProject