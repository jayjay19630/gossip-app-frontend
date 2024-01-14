import { PostArray } from "../data/PostType"
import { sortByLikes } from "./sortByLikes";

export const orderPostData = (postData: PostArray, state: string) => {
    switch(state) {
        case "date":
            return postData.slice(0).reverse();
        case "likes":
            return sortByLikes(postData);
    }
}