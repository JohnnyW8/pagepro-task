export const selectAllUsers = (state) => state.users;

export const selectAllPosts = (state) => state.user.posts;

export const selectPost = (state) => state.post;

export const selectPostComments = (state) => state.post.comments;
