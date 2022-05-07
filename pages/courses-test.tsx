import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getAllCourses } from './api/contentfulRequest'
import { useEffect } from 'react'
import { loadGetInitialProps } from 'next/dist/shared/lib/utils'
interface HomePageProps {
    courses: any
}
const Home: NextPage<HomePageProps> = ({ courses }) => {
    return (
        <div className={styles.container}>


        </div>
    )
}


export async function getStaticProps() {
    const courses = await getAllCourses()
    return {
        props: { courses }, // will be passed to the page component as props
    }
}
export default Home

