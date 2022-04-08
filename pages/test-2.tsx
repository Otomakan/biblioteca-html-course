import type { NextPage } from 'next'
import { Layout } from '../components/Layout'
import { CodingEnvironment } from '../common/CodingEnvironment'

const Introduction: NextPage = () => {
    return (
        <CodingEnvironment instructions={<Instructions />} codeLanguage='html' defaultCode='' previousPage='/test' />
    )
}


const Instructions: React.FC = () => {

    return (
        <>
            <article><h1>Second Page</h1></article>
        </ >
    )
}


export default Introduction
