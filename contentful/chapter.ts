import { convertURLToTitle } from "../lib/titleToUrl"
import { Course, Chapter } from "../types"
import { getContentTypeEntries, contentfulRequest } from "./contentfulRequest"

interface ContentfulResponse {

}

export const serializeChapterResponse = (rawChapterRes: any): Chapter => {
    return {
        name: rawChapterRes?.name
    }

}
export const getAllChapters = async (): Promise<Course[]> => {
    try {
        const res = await contentfulRequest(`/entries`, {
            params: {
                content_type: 'chapter',
                // We use the select to only get limited number of entries 
                //not all the chapters for instance
                select: 'fields.name,sys.id'
            }
        })
        const chapters = res.data.items.map(serializeChapterResponse)
        return chapters
    } catch (e) {
        console.log(e)
        throw e
    }
}
export const getChapterInfoByName = async (chapterName: string): Promise<Course> => {
    try {
        const res = await contentfulRequest(`/entries`, {
            params: {
                content_type: 'chapter',
                ['fields.name']: convertURLToTitle(chapterName),

            }
        })
        return res.data.items.map(serializeCourseResponse)
    } catch (e) {
        console.log(e)
        throw e
    }
}