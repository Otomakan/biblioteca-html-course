import { MouseEventHandler } from "react";
import Link from 'next/link'
import { ButtonPrimary } from "../components/Button";

export const NavBar: React.FC = () => {
    return (
        <div className="nav-bar-container">
            <div className="title">Biblioseo REPL</div>


            <style jsx>{`
            .nav-bar-container {
                width: 100%;
                border: 0;
                display: flex;
                align-items: center;
                padding:0.3rem;
                background: pink;
                height: 5rem;
                border-bottom: 3px black solid;
                position: fixed;
            }
            .title {
                margin-left: 3rem;
                font-size: 2.5rem;
            }

            `}
            </style>
        </div >
    )

}