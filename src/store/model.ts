export interface User {
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

export interface Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}

export interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface Users {
    users: User[];
}

export interface PostData {
    post: {
        data: Post;
        comments: Comment[];
    };
}

export interface UserData {
    user: {
        data: User;
        posts: Post[];
    };
}
