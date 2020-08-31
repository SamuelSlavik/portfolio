import React, {Component} from 'react';
import {BrowserRouter, Link, Switch, Route, NavLink} from "react-router-dom"

class Navigation extends Component{
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className={"navigation"} id={"navigation"}>
                <NavLink
                    exact
                    className={"navLink"}
                    to={"/"}
                    activeClassName={"activeNavLink"}
                >
                    About Me
                </NavLink>
                <NavLink
                    exact
                    className={"navLink"}
                    to={"/portfolio"}
                    activeClassName={"activeNavLink"}
                >
                    Portfolio
                </NavLink>
                <NavLink
                    exact
                    className={"navLink"}
                    to={"/contact"}
                    activeClassName={"activeNavLink"}
                >
                    Contact
                </NavLink>

                {/**************** MOBILE DISPLAY NAVIGATION ****************/}
                <NavLink
                    exact
                    className={"navLink mobileDisplayNavLink"}
                    to={"/"}
                    activeClassName={"activeNavLink"}
                >
                    <i className={"fa fa-2x fa-user"} aria-hidden="true"/>
                </NavLink>
                <NavLink
                    exact
                    className={"navLink mobileDisplayNavLink"}
                    to={"/portfolio"}
                    activeClassName={"activeNavLink"}
                >
                    <i className={"fa fa-2x fa-paperclip"} aria-hidden="true"/>
                </NavLink>
                <NavLink
                    exact
                    className={"navLink mobileDisplayNavLink"}
                    to={"/contact"}
                    activeClassName={"activeNavLink"}
                >
                    <i className={"fa fa-2x fa-envelope"} aria-hidden="true"/>
                </NavLink>
            </div>
        )
    }
}

export default Navigation