import { IUsers, IPostData, IUserData } from 'store/model';

export const selectAllUsers = (state: IUsers) => state.users;

export const selectPost = (state: IPostData) => state.post.data;

export const selectPostComments = (state: IPostData) => state.post.comments;

export const selectUserData = (state: IUserData) => state.user.data;

export const selectAllPosts = (state: IUserData) => state.user.posts;