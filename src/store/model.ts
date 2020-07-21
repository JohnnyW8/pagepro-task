export interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
}

export interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: IAddress;
    company: ICompany;
}

export interface IComment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}

export interface IPost {
    id: number;
    userId: number;
    title: string;
    body: string;
}

export interface IUsers {
    users: IUser[];
}

export interface IPostData {
    post: {
        data: IPost;
        comments: IComment[];
    };
}

export interface IUserData {
    user: {
        data: IUser;
        posts: IPost[];
    };
}