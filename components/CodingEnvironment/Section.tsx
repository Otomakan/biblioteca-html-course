

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
            width: 32%;
            min-width: 500px;
      
            border: 3px solid black;
            border-radius: 10px;
           padding: 2em;
        }
      `}</style></div >


}