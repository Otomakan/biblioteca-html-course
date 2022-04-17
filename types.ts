export type AvailableContentType = 'full-course' | 'chapter' | 'class'
export interface Chapter {
    name: string;
}

export interface Course {
    name: string;
    chapters: Array<Chapter>;
    cid: string;
}
