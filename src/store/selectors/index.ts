interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

interface Users {
    users: User[]
}

interface Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}
interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

interface PostData {
    post: {
        data: Post;
        comments: Comment[]
    }
}

interface UserData {
    user: {
        data: User;
        posts: Post[]
    }
}
export const selectAllUsers = (state: Users) => state.users;

export const selectPost = (state: PostData) => state.post.data;

export const selectPostComments = (state: PostData) => state.post.comments;

export const selectUserData = (state: UserData) => state.user.data;

export const selectAllPosts = (state: UserData) => state.user.posts;