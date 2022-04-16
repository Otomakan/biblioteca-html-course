import type { NextPage } from 'next'
import { CodingEnvironment } from '../common/CodingEnvironment'

const Introduction: NextPage = () => {
    const defaultCode = `<body> 
<h1>Bibloseo</h1>
<p>What's up, doc?</p> 
</body>`
    return (
        <CodingEnvironment instructions={<Instructions />} codeLanguage='html' defaultCode={defaultCode}
            previousPage='/test' nextPage='/test-3' />
    )
}


const Instructions: React.FC = () => {

    return (
        <>
            <h1>Second Page</h1>
            <p> There are different types of tags which serve different functions, for example &lt;h2&gt; &lt;/h2&gt; is a title.</p>
            <h2>Instructions</h2>
            <p>Add a  &lt;h2&gt; &lt;/h2&gt; tags with the title &quot;Subtitulo&quot;</p>
        </ >
    )
}


export default Introduction
