export const CodingEnvironmentContainer: React.FC = ({ children }) => {
    return <div className="code-editor-container">
        {children}
        <style jsx>{`
        .code-editor-container {
            display:flex;
            overflow-x: scroll;
            height: 100vh;
            overflow-y: hidden;
        }
      `}</style>
    </div>
}