import type { NextPage } from 'next'
import { CodingEnvironment } from '../../common/CodingEnvironment'

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
      <h1>Styling</h1>
      <p> You can change the style of a page by using the style tag</p>
      <h2>Instructions</h2>
      <code>
        &lt;style&gt;
        .h1 &#123;
        color: red;
        &#125
        &lt;/style&gt;
      </code>
      <p>Add a  &lt;h2&gt; &lt;/h2&gt; tags with the title &quot;Subtitulo&quot;</p>
    </ >
  )
}


export default Introduction
