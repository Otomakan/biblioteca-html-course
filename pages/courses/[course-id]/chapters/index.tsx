import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import { getAllChapters } from '../../../../contentful/chapter'
import { Chapter } from '../../../../types'
import { v4 } from 'uuid'
import { convertTitleToURL } from '../../../../lib/titleToUrl'
interface HomePageProps {
    chapters: Array<Chapter>
}
const Home: NextPage<HomePageProps> = ({ chapters }) => {
    console.log(chapters)
    return (
        <div className={styles.container}>
            <h1>Chapters</h1>
            <ul>
                {chapters.map((chapter: Chapter) => (
                    <li key={v4()}>
                        <a href={`/chapters/${convertTitleToURL(chapter.name)}`}>
                            {chapter.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export async function getStaticProps() {
    const chapters: Array<Chapter> = await getAllChapters()
    return {
        props: { chapters }, // will be passed to the page component as props
    }
}
export default Home

