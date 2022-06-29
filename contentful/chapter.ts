import { Chapter } from "../types"
import { graphQLQuery } from "./contentfulRequest"
import { serializeLessonCollection } from "./lesson"

interface ContentfulResponse {

}

export const serializeChapterResponse = (rawChapterRes: any): Chapter => {
    const rawLessons = rawChapterRes?.lessonsCollection?.items || []

    const lessons = rawLessons.map(serializeLessonCollection)
    return {
        name: rawChapterRes?.name || '',
        id: rawChapterRes?.sys?.id || null,
        lessons
    }

}

export const getAllChapters = async (): Promise<Chapter[]> => {
    try {
        const res = await graphQLQuery(`
           query {
                chapterCollection {
                items {
                    name
                    sys {
                        id
                    }
                }
            }
        }
        `)
        const courses = res.data.data.chapterCollection.items.map(serializeChapterResponse)
        return courses
    } catch (e) {
        console.log(e)
        throw e
    }
}

export const getChapterInfoById = async (chapterId: string): Promise<Chapter> => {
    try {
        const res = await graphQLQuery(`
           query {
                chapter (id : "${chapterId}") {
                    name
                    sys {id}
                    lessonsCollection{
                        items {
                            title
                            sys {id} 
                        }
                    }
            }
        }
        `)
        return [res.data.data.chapter].map(serializeChapterResponse)[0]
    } catch (e) {
        // console.log(e)
        throw e
    }
}// export const getAllChapters = async (): Promise<Course[]> => {
//     try {
//         const res = await contentfulRequest(`/entries`, {
//             params: {
//                 content_type: 'chapter',
//                 // We use the select to only get limited number of entries 
//                 //not all the chapters for instance
//                 select: 'fields.name,sys.id'
//             }
//         })
//         const chapters = res.data.items.map(serializeChapterResponse)
//         return chapters
//     } catch (e) {
//         console.log(e)
//         throw e
//     }
// }
// export const getChapterInfoByName = async (chapterName: string): Promise<Course> => {
//     try {
//         const res = await contentfulRequest(`/entries`, {
//             params: {
//                 content_type: 'chapter',
//                 ['fields.name']: convertURLToTitle(chapterName),

//             }
//         })
//         return res.data.items.map(serializeCourseResponse)
//     } catch (e) {
//         console.log(e)
//         throw e
//     }
// }
