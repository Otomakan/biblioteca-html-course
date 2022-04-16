import React from "react";
import { Head } from "./Head";
import { NavBar } from "../NavBar";
export const Layout: React.FC = (props) => {
    return (
        <div>
            <Head />
            <div >
                <NavBar />
                {props.children}
            </div>
        </div >
    )
}