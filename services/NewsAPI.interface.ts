import { ArticleI } from "../interfaces/Article"

export interface GetNewsOptionsI {
    category?: string
    pageSize?: number
    page?: number
    q?: string
    sources?: string
}

export interface GetResponseI {
    status: string
    message?: string
}

export interface GetNewsResponseI extends GetResponseI {
    articles: ArticleI[]
}