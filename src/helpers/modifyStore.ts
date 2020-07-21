import { keyToNumber } from "helpers/keyToNumber";
import { IComment, IPost } from "store/model";

interface IAddComment {
    (a: IComment[], b: IComment): IComment[];
}
interface IRemovePost {
    (a: IPost[], b: number): IPost[];
}
interface IAddPost {
    (a: IPost[], b: IPost): IPost[];
}

const addCommentHelper: IAddComment = (state, newItem) => [
    keyToNumber(newItem, "postId"),
    ...state,
];
const removePostHelper: IRemovePost = (state, id) =>
    state.filter((val) => val.id !== id);

const addPostHelper: IAddPost = (state, newItem) => [
    keyToNumber(newItem, "userId"),
    ...state,
];

export {
    addCommentHelper,
    removePostHelper,
    addPostHelper
}