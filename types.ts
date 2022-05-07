export type AvailableContentType = 'full-course' | 'chapter' | 'class'
export interface Chapter {
    name: string;
    lessons: Array<Lesson>
}

export interface Course {
    name: string;
    chapters: Array<Chapter>;
    id: string;
}
