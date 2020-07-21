import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "store/reducers";
import { User, Post, Comment } from "store/model";

export const GET_USERS = "GET_USERS";
export const GET_USER_DATA = "GET_USER_DATA";
export const GET_USER_POSTS = "GET_USER_POSTS";
export const ADD_POST = "ADD_POST";
export const REMOVE_POST = "REMOVE_POST";
export const GET_POST = "GET_POST";
export const GET_POST_COMMENTS = "GET_POST_COMMENTS";
export const ADD_POST_COMMENT = "ADD_POST_COMMENT";

//USERS reducer
export type UsersState = User[];

export interface UsersActionTypes {
    type: typeof GET_USERS;
    payload: User[];
}

//USER reducer
interface GetUserDataAction {
    type: typeof GET_USER_DATA;
    payload: User;
}
interface GetUserPostsAction {
    type: typeof GET_USER_POSTS;
    payload: Post[];
}
interface RemoveUserPostAction {
    type: typeof REMOVE_POST;
    payload: number;
}
interface AddUserPostAction {
    type: typeof ADD_POST;
    payload: Post;
}
export type UserActionTypes =
    | GetUserDataAction
    | GetUserPostsAction
    | RemoveUserPostAction
    | AddUserPostAction;

export interface UserState {
    data: User | {};
    posts: Post[];
}

//Post reducer
interface GetPostAction {
    type: typeof GET_POST;
    payload: Post;
}
interface GetPostCommentsAction {
    type: typeof GET_POST_COMMENTS;
    payload: Comment[];
}
interface AddPostCommentAction {
    type: typeof ADD_POST_COMMENT;
    payload: Comment;
}
export type PostActionTypes =
    | GetPostAction
    | GetPostCommentsAction
    | AddPostCommentAction;

export interface PostState {
    data: Post | {};
    comments: Comment[];
}

//Thunk action
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
