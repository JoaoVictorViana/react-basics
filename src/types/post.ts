export type AuthorSex = 'female' | 'male' | 'other'

export type Author = {
    name: string
    job: string
    age: number
    sex: AuthorSex
}

export type Post = {
    id: number
    title: string
    description: string
    author: Author
    createdAt: Date
}