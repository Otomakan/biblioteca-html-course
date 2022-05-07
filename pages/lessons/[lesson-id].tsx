import type { NextPage } from 'next'
import styles from '../../styles/Home.module.css'
import { getAllLessons, getLessonInfoById } from '../../contentful/lesson'
import { Lesson } from '../../types'
import { v4 } from 'uuid'
import { convertTitleToURL, convertURLToTitle } from '../../lib/titleToUrl'
import { CodingEnvironment } from '../../common/CodingEnvironment'
interface HomePageProps {
    lesson: Lesson
}
const Home: NextPage<HomePageProps> = ({ lesson }) => {
    return (
        <div className={styles.container}>
            <CodingEnvironment
                instructions={lesson.instructions} defaultCode={lesson.defaultCode}
                explanation={lesson.explanation}
                codeLanguage={lesson.language} nextPage={lesson.nextClass} previousPage={lesson.previousClass}
            />

        </div>
    )
}

export async function getStaticProps({ params }) {
    const lesson: Lesson = await getLessonInfoById(params['lesson-id'])
    // const lessons: Array<Lesson> = await getAllLessons(params['lesson-id'])
    return {
        props: { lesson }, // will be passed to the page component as props
    }
}



export async function getStaticPaths(props) {
    // Call an external API endpoint to get posts
    const courses = await getAllLessons()

    const paths = courses.map((lesson: any) => ({
        params: { ['lesson-id']: lesson.id },
    }))
    return { paths, fallback: false }
}

export default Home