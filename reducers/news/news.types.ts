import { ArticleI } from "../../interfaces/Article";

export enum Types {
    SAVE_NEWS = "SET_NEWS",
    UPDATE_CATEGORY = "UPDATE_CATEGORY",
    SET_ERROR = "SET_ERROR",
    UPDATE_LOADING = "SET_LOAD",
}

export type NewsActions =
    | { type: Types.SAVE_NEWS, payload: { category: string, news: ArticleI[] } }
    | { type: Types.UPDATE_CATEGORY, category: string }
    | { type: Types.SET_ERROR, message: string }
    | { type: Types.UPDATE_LOADING, value: boolean }