import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { getAllCourses } from '../../contentful/course'
import { useEffect } from 'react'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
import { Course } from '../../types'
import { randomUUID } from 'crypto'
import { v4 } from 'uuid'
import { convertTitleToURL } from '../../lib/titleToUrl'
interface HomePageProps {
    courses: Array<Course>
}
const Home: NextPage<HomePageProps> = ({ courses }) => {
    return (
        <div className={styles.container}>
            <h1>Courses</h1>
            <ul>
                {courses.map((course: Course) => (
                    <li key={v4()}>
                        <a href={`/courses/${course.id}`}>
                            {course.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export async function getStaticProps() {
    const courses: Array<Course> = await getAllCourses()
    // await getCourseInfo()
    return {
        props: { courses }, // will be passed to the page component as props
    }
}
export default Home

