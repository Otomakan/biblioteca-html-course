import { AvailableLanguages, Lesson } from "../types"
import { graphQLQuery } from "./contentfulRequest"

export const serializeLessonCollection = (rawLessonRes: any): Lesson => {
    let language = 'html' as AvailableLanguages
    if (rawLessonRes?.language)
        language = rawLessonRes.language[0] as AvailableLanguages

    console.log({ rawLessonRes })
    return {
        title: rawLessonRes?.title,
        id: rawLessonRes?.sys?.id || '',
        explanation: rawLessonRes?.explanation?.json || null,
        instructions: rawLessonRes?.instructions?.json || null,
        defaultCode: rawLessonRes?.defaultCode || '',
        language,
        nextLessonId: rawLessonRes?.nextclass?.sys.id || null,
        previousLessonId: rawLessonRes?.previousclass?.sys.id || null,
    }
}


export const getAllLessons = async (): Promise<Lesson[]> => {
    try {
        const res = await graphQLQuery(`
           query {
                lessonCollection {
                items {
                    title
                    sys {
                        id
                    }
                }
            }
        }
        `)
        const courses = res.data.data.lessonCollection.items.map(serializeLessonCollection)
        return courses
    } catch (e) {
        console.log(e)
        throw e
    }
}

export const getLessonInfoById = async (lessonId: string): Promise<Lesson> => {
    try {
        const res = await graphQLQuery(`
           query {
                lesson (id : "${lessonId}") {
                    title
                    sys {id}
                    explanation {
                        json
                    }
                    instructions {
                        json
                    }
                    defaultCode 
                    language
                    previousclass {
                        sys{id}
                    }
                    nextclass {
                        sys{id}
                    }

            }
        }
        `)
        return [res.data.data.lesson].map(serializeLessonCollection)[0]
    } catch (e) {
        // console.log(e)
        throw e
    }
}