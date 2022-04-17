import { convertURLToTitle } from "../lib/titleToUrl"
import { Course, Chapter } from "../types"
import { getContentTypeEntries, contentfulRequest, contentfulRequestGaphql, graphQLQuery } from "./contentfulRequest"

interface ContentfulResponse {

}



const serializeCourseResponse = (rawCourseRes: any): Course => {
    return {
        name: rawCourseRes.fields.name,
        chapters: [],
        cid: rawCourseRes.sys.id
    }
}

export const getAllCourses = async (): Promise<Course[]> => {
    try {
        const res = await contentfulRequest(`/entries`, {
            params: {
                content_type: 'full-course',
                // We use the select to only get limited number of entries 
                //not all the chapters for instance
                select: 'fields.name,sys.id'
            }
        })
        const courses = res.data.items.map(serializeCourseResponse)
        return courses
    } catch (e) {
        console.log(e)
        throw e
    }
}
export const getCourseInfoByName = async (courseName: string): Promise<Course> => {
    try {

        // const res = await contentfulRequestGaphql('/', {
        //     params: {
        //         content_type: 'full-course',
        //         ['fields.name']: convertURLToTitle(courseName),
        //         include: 10
        //     }
        // })
        const res = await graphQLQuery(`
           query{
                fullCourseCollection (name:${courseName} {
                items {
                    name
                    chaptersCollection{
                        items{
                            name
                        }
                    }
                }
            }
        }
        `)
        console.log(res.data.data.fullCourseCollection.items)
        return res.data.items.map(serializeCourseResponse)[0]
    } catch (e) {
        console.log(e)
        console.log(e.response.data)
        // throw e
    }
}