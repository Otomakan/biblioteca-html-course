interface HTMLViewerProps {
    code: string;
}
export const HTMLViewer: React.FC<HTMLViewerProps> = ({ code }) => {

    return (
        <>
            <iframe className='html-editor-iframe' srcDoc={code}>{code}
            </iframe>
            <style jsx>{`
            .html-editor-iframe {
                width: 100%;
                border: 0;
            }
            `}</style>
        </>
    )

}