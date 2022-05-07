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
        name: rawCourseRes?.name,
        chapters,
        id: rawCourseRes?.sys?.id
    }
}

export const getAllCourses = async (): Promise<Course[]> => {
    try {
        const res = await graphQLQuery(`
           query {
                fullCourseCollection {
                items {
                    name
                    sys {
                        id
                    }
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
        return res.data.data.fullCourseCollection.items.map(serializeCourseResponse)[0]
    } catch (e) {
        console.log(e)
        console.log(e.response.data)
        throw e
    }
}
export const getCourseInfoById = async (courseId: string): Promise<Course> => {
    try {
        const res = await graphQLQuery(`
           query {
                fullCourse (id : "${courseId}") {
                    name
                    sys {id}
                    chaptersCollection{
                        items {
                            name
                            sys {id} 
                        }
                    }
            }
        }
        `)
        return [res.data.data.fullCourse].map(serializeCourseResponse)[0]
    } catch (e) {
        console.log(e)
        console.log(e.response.data)
        throw e
    }
}