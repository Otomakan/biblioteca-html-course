import { LowerBar } from "./LowerBar"
import { MouseEventHandler } from "react";
import { LowerBarProps } from "./LowerBar";
export interface CodingEnvironmentContainerProps extends LowerBarProps { }

export const CodingEnvironmentContainer: React.FC<CodingEnvironmentContainerProps> = ({ nextPage, previousPage, onSubmit, children }) => {
    return (
        <div className="code-environment-container">
            <div className="code-environment">
                {children}
            </div>
            <div className="lower-bar-container">
                <LowerBar nextPage={nextPage} previousPage={previousPage} onSubmit={onSubmit} />
            </div>
            <style jsx>{`
        .code-environment-container {
            display:flex;
            flex-direction: column;
            height: 100vh;
            padding: 20px;
        }
        .code-environment {
            display:flex;
            overflow-x: scroll;
            overflow-y: hidden;
            flex-grow: 1;
        }
        .lower-bar-container {
            width:100%;
            height: 5rem;
            border: 1px solid black;
            margin-top: 0px;
            border-radius: 10px;
        }
      `}</style>
        </div>
    )
}