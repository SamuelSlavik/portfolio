import React from "react";
import { HashLink } from 'react-router-hash-link';


function CaseStudyHeader(props) {
    return (
        <div className={"caseStudyHeaderWrapper"}>
            <div className={"caseStudyHeader"}>
                <div data-aos={"fade-right"}>
                    <h2 className={"h2--MarginTop"}><span className={"text--pink"}>FrontEnd</span> Technologies:</h2>
                    {props.ReactJS === true ? <span className={"caseStudyTechnology"}><i className='fab'>&#xf41b;</i>ReactJS</span> : null}
                    {props.TypeScript === true ? <span className={"caseStudyTechnology"}><i className='fab'>&#xf3b9;</i>TypeScript</span> : null}
                    {props.JavaScript === true ? <span className={"caseStudyTechnology"}><i className='fab'>&#xf3b9;</i>JavaScript</span> : null}
                    {props.JQuery === true ? <span className={"caseStudyTechnology"}><i className='fab'>&#xf3b9;</i>JQuery</span> : null}
                    {props.HTML === true ? <span className={"caseStudyTechnology"}><i className='fab'>&#xf13b;</i>HTML</span> : null}
                    {props.SCSS === true ? <span className={"caseStudyTechnology"}><i className='fab'>&#xf13c;</i>SCSS</span> : null}
                    {props.CSS === true ? <span className={"caseStudyTechnology"}><i className='fab'>&#xf13c;</i>CSS</span> : null}
                </div>
                <div data-aos={"fade-left"}>
                    <h2><span className={"text--pink"}>BackEnd</span> Technologies:</h2>
                    {props.NodeJS === true ? <span className={"caseStudyTechnology"}><i className='fab'>&#xf419;</i>NodeJS</span> : null}
                    {props.ExpressJS === true ? <span className={"caseStudyTechnology"}><i className='fab'>&#xf3d3;</i>ExpressJS</span> : null}
                    {props.Python === true ? <span className={"caseStudyTechnology"}><i className='fab'>&#xf3e2;</i>Python</span> : null}
                    {props.MongoDB === true ? <span className={"caseStudyTechnology"}><i className='fa'>&#xf0c2;</i>MongoDB</span> : null}
                    {props.PHP === true ? <span className={"caseStudyTechnology"}><i className='fab'>&#xf457;</i>PHP</span> : null}
                    {props.SQL === true ? <span className={"caseStudyTechnology"}><i className='fa'>&#xf0c2;</i>SQL</span> : null}
                    {props.WordPress === true ? <span className={"caseStudyTechnology"}><i className='fab'>&#xf19a;</i>WordPress</span> : null}
                </div>
            </div>
          <div className={"singleProjectHeaderImageWrapper"} data-aos="zoom-in">
            <a href={props.url} target={"_blank"}><img className={"singleProjectHeaderImage"} alt={"headerImage"} src={props.headerImage} /></a>
          </div>
        </div>
    )
}

export default CaseStudyHeader