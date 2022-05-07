import { LowerBar } from "./LowerBar"
import { LowerBarProps } from "./LowerBar";
export interface CodingEnvironmentContainerProps extends LowerBarProps { }

export const CodingEnvironmentContainer: React.FC<CodingEnvironmentContainerProps> = ({ nextLessonId, previousLessonId, children }) => {
    return (
        <div className="code-environment-container">
            <div className="code-environment">
                {children}
            </div>
            <div className="lower-bar-container">
                <LowerBar nextLessonId={nextLessonId} previousLessonId={previousLessonId} />
            </div>
            <style jsx>{`
        .code-environment-container {
            display:flex;
            flex-direction: column;
            height: 100vh;
            padding: 20px;
            padding-top: 6rem;
        }
        .code-environment {
            display:flex;
            overflow-x: scroll;
            overflow-y: hidden;
            flex-grow: 1;
            justify-content: space-between;
        }
        .lower-bar-container {
            width:100%;
            height: 5rem;
            margin-top: 0px;
            border-radius: 10px;
            min-height: 60px;
        }
      `}</style>
        </div>
    )
}