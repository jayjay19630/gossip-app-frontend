import { PostArray, PostType } from "../data/PostType";

const compareByLikes = (post1: PostType, post2: PostType) => {
    return post2.likes - post1.likes;
}

export const sortByLikes = (postArray: PostArray) => {
    return postArray.sort(compareByLikes);
}