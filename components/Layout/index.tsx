import React from "react";
import { Head } from "./Head";
export const Layout: React.FC = (props) => {
    return (
        <div>
            <Head />
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}