import { AvailableLanguages } from '../index'
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-cshtml';
import 'prismjs/components/prism-css'
import "prismjs/themes/prism-tomorrow.css";

import { CodingEnvironmentSection } from '../../../components/CodingEnvironment/Section';

type CodeEditorProps = {
    code: string;
    updateCode: Function;
    language: AvailableLanguages;
}
export const CodeEditor: React.FC<CodeEditorProps> = ({ code, updateCode, language }) => {
    return (
        <CodingEnvironmentSection>
            <Editor
                value={code}
                onValueChange={(code: string) => updateCode(code)}
                highlight={(code: string) => highlight(code, languages[language], language)}
                padding={10}
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 20,
                }}
            />
        </CodingEnvironmentSection>
    )
}