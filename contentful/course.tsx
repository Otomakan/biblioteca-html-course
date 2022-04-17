import { convertURLToTitle } from "../lib/titleToUrl"
import { Course, Chapter } from "../types"
import { serializeChapterResponse } from "./chapter"
import { contentfulRequest, contentfulRequestGaphql, graphQLQuery } from "./contentfulRequest"

interface ContentfulResponse {

}



const serializeCourseResponse = (rawCourseRes: any): Course => {
    const rawChapters = rawCourseRes?.chaptersCollection?.items || []
    const chapters = rawChapters.map(serializeChapterResponse)
    return {
        name: rawCourseRes.name,
        chapters,
        cid: ''
    }
}

export const getAllCourses = async (): Promise<Course[]> => {
    try {
        const res = await graphQLQuery(`
           query {
                fullCourseCollection {
                items {
                    name
                }
            }
        }
        `)
        const courses = res.data.data.fullCourseCollection.items.map(serializeCourseResponse)
        return courses
    } catch (e) {
        console.log(e)
        throw e
    }
}
export const getCourseInfoByName = async (courseName: string): Promise<Course> => {
    try {
        const res = await graphQLQuery(`
           query {
                fullCourseCollection (where: {name: "${courseName}"}) {
                items {
                    name
                    chaptersCollection{
                        items {
                            name
                        }
                    }
                }
            }
        }
        `)
        console.log()
        return res.data.data.fullCourseCollection.items.map(serializeCourseResponse)[0]
    } catch (e) {
        console.log(e)
        console.log(e.response.data)
        throw e
    }
}