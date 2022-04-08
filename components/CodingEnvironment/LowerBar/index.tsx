import { MouseEventHandler } from "react";

export interface LowerBarProps {
    nextPage?: string;
    previousPage?: string;
    onSubmit?: MouseEventHandler<HTMLButtonElement>;
}
export const LowerBar: React.FC<LowerBarProps> = ({ nextPage, previousPage, onSubmit }) => {

    return (
        <div className="lower-bar-container">
            {nextPage && <button>Next</button>}
            {previousPage && <button>Previous</button>}
            {onSubmit && <button onClick={onSubmit}>SUBMIT</button>}
            <style jsx>{`
            .html-editor-iframe {
                width: 100%;
                border: 0;
            }
            `}
            </style>
        </div >
    )

}