export type AvailableLanguages = 'html' | 'javascript'
export type AvailableContentType = 'full-course' | 'chapter' | 'class'
export interface Lesson {
    id: string;
    title: string;
    explanation: any;
    instructions: any;
    defaultCode: string;
    language: AvailableLanguages;
    nextClass?: string;
    previousClass?: string;
}
export interface Chapter {
    name: string;
    lessons: Array<Lesson>;
    id: string;
}

export interface Course {
    name: string;
    chapters: Array<Chapter>;
    id: string;
}
