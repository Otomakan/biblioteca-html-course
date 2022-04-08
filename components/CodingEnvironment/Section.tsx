

export const CodingEnvironmentSection: React.FC = ({ children }) => {
    return <div className="editor-section-container">
        {children}
        <style jsx>{`
        .editor-section-container {
            margin: 20px;
            width: 33vw;
            min-width: 500px;
            height: 100%;
            max-height: 100%;
            overflow: scroll;
            border: 1px solid black;
            border-radius: 10px;
           padding: 2em;
        }
      `}</style></div>


}