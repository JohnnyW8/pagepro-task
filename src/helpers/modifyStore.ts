import { keyToNumber } from "helpers/keyToNumber";
import { Comment, Post } from "store/model";

interface AddComment {
    (a: Comment[], b: Comment): Comment[];
}
interface RemovePost {
    (a: Post[], b: number): Post[];
}
interface AddPost {
    (a: Post[], b: Post): Post[];
}

export const addCommentHelper: AddComment = (state, newItem) => [
    keyToNumber(newItem, "postId"),
    ...state,
];
export const removePostHelper: RemovePost = (state, id) =>
    state.filter((val) => val.id !== id);

export const addPostHelper: AddPost = (state, newItem) => [
    keyToNumber(newItem, "userId"),
    ...state,
];