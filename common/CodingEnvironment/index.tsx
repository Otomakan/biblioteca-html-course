import { ReactComponentElement, ReactNode, useState } from "react"
import { CodingEnvironmentContainer } from "../../components/CodingEnvironment/Container"
import { CodeEditor } from "./CodeEditor"
import { CodeViewer } from './CodeViewer'
import { Instructions } from './Instructions'
export type AvailableLanguages = 'html' | 'js'
type SectionType = 'default' | 'header'
type SectionProp = {
    instructions: React.ReactNode,
    codeLanguage?: AvailableLanguages,
    defaultCode: string
}

const defaultCodeString = `// write your code here
`

export const CodingEnvironment: React.FC<SectionProp> = ({ instructions, codeLanguage = 'html', defaultCode = '' }) => {
    const [code, updateCode] = useState(defaultCode || defaultCodeString)
    return (
        <CodingEnvironmentContainer>
            <Instructions instructions={instructions} />
            <CodeEditor code={code} updateCode={updateCode} language={codeLanguage} />
            <CodeViewer code={code} codeLanguage={codeLanguage} />
        </CodingEnvironmentContainer>
    )
}
