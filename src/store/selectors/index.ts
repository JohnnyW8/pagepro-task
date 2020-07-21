import { Users, PostData, UserData } from 'store/model';

export const selectAllUsers = (state: Users) => state.users;

export const selectPost = (state: PostData) => state.post.data;

export const selectPostComments = (state: PostData) => state.post.comments;

export const selectUserData = (state: UserData) => state.user.data;

export const selectAllPosts = (state: UserData) => state.user.posts;