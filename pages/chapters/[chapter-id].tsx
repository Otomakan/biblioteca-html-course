import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import { getAllChapters, getChapterInfoById } from '../../contentful/chapter'
import { Chapter, Lesson } from '../../types'
import { v4 } from 'uuid'
interface HomePageProps {
    chapter: Chapter
}
export interface ChapterRouteStaticParams {
    'chapter-id': string;
}
export interface ChapterRouteStaticContext {
    params: ChapterRouteStaticParams
}
const Home: NextPage<HomePageProps> = ({ chapter }) => {
    return (
        <div className={styles.container}>
            <h1>Chapters</h1>
            <ul>
                {chapter?.lessons.map((lesson: Lesson) => (
                    <li key={v4()}>
                        <a href={`/lessons/${(lesson.id)}`}>
                            {lesson.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export async function getStaticProps(context: ChapterRouteStaticContext) {
    const params = context.params
    const chapter: Chapter = await getChapterInfoById(params['chapter-id'])
    // const chapters: Array<Chapter> = await getAllChapters(params['chapter-id'])
    return {
        props: { chapter }, // will be passed to the page component as props
    }
}



export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const courses = await getAllChapters()

    const paths = courses.map((chapter: any) => ({
        params: { ['chapter-id']: chapter.id },
    }))
    return { paths, fallback: false }
}

export default Home