import type { NextPage } from 'next'
import styles from '../../../styles/Home.module.css'
import { getAllChapters } from '../../../contentful/chapter'
import { getAllCourses, getCourseInfoByName } from '../../../contentful/course'
import { Chapter, Course } from '../../../types'
import { v4 } from 'uuid'
import { convertTitleToURL, convertURLToTitle } from '../../../lib/titleToUrl'
interface HomePageProps {
    course: Course
}
const Home: NextPage<HomePageProps> = ({ course }) => {
    return (
        <div className={styles.container}>
            <h1>Chapters</h1>
            <ul>
                {course?.chapters.map((chapter: Chapter) => (
                    <li key={v4()}>
                        <a href={`/courses/${convertTitleToURL(course.name)}/chapters/${convertTitleToURL(chapter.name)}`}>
                            {chapter.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const course: Course = await getCourseInfoByName(convertURLToTitle(params['course-id']))
    console.log(course)
    // const chapters: Array<Chapter> = await getAllChapters(params['course-id'])
    return {
        props: { course }, // will be passed to the page component as props
    }
}



export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const courses = await getAllCourses()

    const paths = courses.map((course: any) => ({
        params: { ['course-id']: convertTitleToURL(course.name) },
    }))
    return { paths, fallback: false }
}

export default Home