import { CodingEnvironmentSection } from '../../../components/CodingEnvironment/Section';
import { AvailableLanguages } from '../index'
import { HTMLViewer } from './html'

type CodeViewerProps = {
    code: string;
    codeLanguage: AvailableLanguages;
}

export const CodeViewer: React.FC<CodeViewerProps> = ({ code, codeLanguage }) => {

    const getLanguageComponent = () => {
        switch (codeLanguage) {
            case ('html'):
                return <HTMLViewer code={code} />
            default:
                return <div>Language: {codeLanguage} is not available</div>
        }
    }

    return (
        <CodingEnvironmentSection>
            <div className="editor-section code-language-section">
                {getLanguageComponent()}
            </div>
        </CodingEnvironmentSection>
    )
}