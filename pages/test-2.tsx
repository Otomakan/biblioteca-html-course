import type { NextPage } from 'next'
import { CodingEnvironment } from '../common/CodingEnvironment'

const Introduction: NextPage = () => {
    const defaultCode = `<body> 
<! --- Replace this line with a comment --->
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
            <p> There are different types of tags which serve different functions, for example &lt;h1&gt; &lt;/h1&gt; is a title.</p>
            <h2>Instructions</h2>
            <p>Add a  &lt; h1&gt; &lt; /h1&gt; tags with the title &quot; Biblioseo&quot;</p>
        </ >
    )
}


export default Introduction