import React from "react";

function SingleProject(props) {
    return (
        <div className={"portfolioSingle"} data-aos={props.aos}>
            <div className="container">
                <a className="button" href={"#popup" + props.id}><img alt={props.image} src={props.image} /></a>
                <div className="popup" id={"popup" + props.id}>
                    <a className="popup__close" href="#!">X</a>
                    <div className={"popupInner"}>
                        <h2 className={"popupHeadline"}><a href={props.anchorHref} target={"_blank"}>{props.headline}</a></h2>
                        <img alt={props.image} src={props.image} />
                        <h3>About project:</h3>
                        <p>{props.aboutProject}</p>
                        <h3>Services provided:</h3>
                        <p>{props.servicesProvided}</p>
                        <h3>Technologies used:</h3>
                        <p>{props.technologiesUsed}</p>
                        <br/>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProject