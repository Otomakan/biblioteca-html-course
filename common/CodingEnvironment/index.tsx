import { useState } from "react"
import { CodingEnvironmentContainer } from "../../components/CodingEnvironment/Container"
import { LowerBar } from "../../components/CodingEnvironment/LowerBar"
import { CodeEditor } from "./CodeEditor"
import { CodeViewer } from './CodeViewer'
import { Instructions } from './Instructions'
import { CodingEnvironmentContainerProps } from '../../components/CodingEnvironment/Container'
export type AvailableLanguages = 'html' | 'js'
type SectionType = 'default' | 'header'
export interface CodingEnvironmentProps extends CodingEnvironmentContainerProps {
    instructions: React.ReactNode,
    codeLanguage?: AvailableLanguages,
    defaultCode: string,
    nextPage?: string,
    previousPage?: string,
}

const defaultCodeString = `// write your code here
`

export const CodingEnvironment: React.FC<CodingEnvironmentProps> = (
    { instructions, codeLanguage = 'html', defaultCode = '',
        nextPage, previousPage }) => {
    const [code, updateCode] = useState(defaultCode || defaultCodeString)
    return (
        <CodingEnvironmentContainer nextPage={nextPage} previousPage={previousPage} >
            <Instructions instructions={instructions} />
            <CodeEditor code={code} updateCode={updateCode} language={codeLanguage} />
            <CodeViewer code={code} codeLanguage={codeLanguage} />
        </CodingEnvironmentContainer>
    )
}
