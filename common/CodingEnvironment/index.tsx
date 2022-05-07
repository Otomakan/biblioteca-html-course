import { useEffect, useState } from "react"
import { CodingEnvironmentContainer } from "../../components/CodingEnvironment/Container"
import { CodeEditor } from "./CodeEditor"
import { CodeViewer } from './CodeViewer'
import { Instructions } from './Instructions'
import { CodingEnvironmentContainerProps } from '../../components/CodingEnvironment/Container'
import { AvailableLanguages } from "../../types"
type SectionType = 'default' | 'header'
export interface CodingEnvironmentProps extends CodingEnvironmentContainerProps {
    instructions: any,
    explanation: any;
    codeLanguage?: AvailableLanguages,
    defaultCode: string,
    nextLessonId?: string,
    previousLessonId?: string,
    title: string;
}


const defaultCodeString = `// write your code here
`

export const CodingEnvironment: React.FC<CodingEnvironmentProps> = (
    {
        instructions, explanation, codeLanguage = 'html', defaultCode = '',
        nextLessonId, previousLessonId, title }) => {


    const [code, updateCode] = useState(defaultCode || defaultCodeString)
    useEffect(() => {
        updateCode(defaultCode)
    }, [defaultCode])
    return (
        <CodingEnvironmentContainer nextLessonId={nextLessonId} previousLessonId={previousLessonId} >
            <Instructions title={title} instructions={instructions} explanation={explanation} />
            <CodeEditor code={code} updateCode={updateCode} language={codeLanguage} />
            <CodeViewer code={code} codeLanguage={codeLanguage} />
        </CodingEnvironmentContainer>
    )
}
