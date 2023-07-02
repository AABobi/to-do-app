
export enum Category {
    important = 'IMPORTANT',
    normal = "NORMAL",
    minor = "MINOR"
}

export interface Task {
    taskDescription: string,
    category?: Category
    date?: string,
    location?: string
}