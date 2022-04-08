

export const CodingEnvironmentSection: React.FC = ({ children }) => {
    return <div className="editor-section-container">
        <div className="code-editor">
            {children}
        </div>
        <style jsx>{`
        .code-editor {
            height: 100%;
            max-height: 100%;
            overflow: scroll;

        }
        .editor-section-container {
            width: 33vw;
            min-width: 500px;
      
            border: 1px solid black;
            border-radius: 10px;
           padding: 2em;
        }
      `}</style></div >


}