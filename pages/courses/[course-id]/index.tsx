import type { NextPage } from 'next'
import styles from '../../../styles/Home.module.css'
import { getAllChapters } from '../../../contentful/chapter'
import { getAllCourses, getCourseInfoById, getCourseInfoByName } from '../../../contentful/course'
import { Chapter, Course } from '../../../types'
import { v4 } from 'uuid'
import { convertTitleToURL, convertURLToTitle } from '../../../lib/titleToUrl'
interface HomePageProps {
    course: Course
}
export interface ChapterRouteStaticParams {
    'course-id': string;
}
export interface ChapterRouteStaticContext {
    params: ChapterRouteStaticParams
}
const Home: NextPage<HomePageProps> = ({ course }) => {
    return (
        <div className={styles.container}>
            <h1>Chapters</h1>
            <ul>
                {course?.chapters.map((chapter: Chapter) => (
                    <li key={v4()}>
                        <a href={`/chapters/${(chapter.id)}`}>
                            {chapter.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps(context: ChapterRouteStaticContext) {
    const params = context.params
    const course: Course = await getCourseInfoById(params['course-id'])
    // const chapters: Array<Chapter> = await getAllChapters(params['course-id'])
    return {
        props: { course }, // will be passed to the page component as props
    }
}



export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    let courses = await getAllCourses()
    // const chapters = await getAllChapters()
    courses = courses.filter(c => c.id !== '50zu2xqaM2hPNvu8t11KnR')
    const paths = courses.map((course: any) => ({
        params: { ['course-id']: course.id },
    }))
    return { paths, fallback: false }
}

export default Home