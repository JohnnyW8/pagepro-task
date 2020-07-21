import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "store/reducers";
import { IUser, IPost, IComment } from "types";

export const GET_USERS = "GET_USERS";
export const GET_USER_DATA = "GET_USER_DATA";
export const GET_USER_POSTS = "GET_USER_POSTS";
export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";
export const GET_POST = "GET_POST";
export const GET_POST_COMMENTS = "GET_POST_COMMENTS";
export const ADD_POST_COMMENT = "ADD_POST_COMMENT";

//USERS reducer
export type UsersState = IUser[];

export interface UsersActionTypes {
    type: typeof GET_USERS;
    payload: IUser[];
}

//USER reducer
interface GetUserDataAction {
    type: typeof GET_USER_DATA;
    payload: IUser;
}
interface GetUserPostsAction {
    type: typeof GET_USER_POSTS;
    payload: IPost[];
}
interface RemoveUserPostAction {
    type: typeof REMOVE_POST;
    payload: number;
}
interface AddUserPostAction {
    type: typeof ADD_POST;
    payload: IPost;
}
export type UserActionTypes =
    | GetUserDataAction
    | GetUserPostsAction
    | RemoveUserPostAction
    | AddUserPostAction;

export interface UserState {
    data: IUser | {};
    posts: IPost[];
}

//Post reducer
interface GetPostAction {
    type: typeof GET_POST;
    payload: IPost;
}
interface GetPostCommentsAction {
    type: typeof GET_POST_COMMENTS;
    payload: IComment[];
}
interface AddPostCommentAction {
    type: typeof ADD_POST_COMMENT;
    payload: IComment;
}
export type PostActionTypes =
    | GetPostAction
    | GetPostCommentsAction
    | AddPostCommentAction;

export interface PostState {
    data: IPost | {};
    comments: IComment[];
}

//Thunk action
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
