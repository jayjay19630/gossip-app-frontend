import { PostArray } from "../data/PostType";
import { TagDataType } from "../data/TagType";
import { checkSimilarArrays } from "./checkSimilarArray";
import { useTagData } from "./useTagData";

export const filterPostData = (query: string, postData: PostArray, toggledTagsArr: number[]) => {

    const tagList = useTagData() as TagDataType[];
    const tagNameList = toggledTagsArr.map(tagId => tagList[tagId - 1].tag_name);

    if (query === "" && tagNameList.length === 0) {
      return postData;
    } else if (tagNameList.length === 0) {
      return postData.filter((data) => (data.post.title.toLowerCase().includes(query) || data.username.toLowerCase().includes(query)))
    } else {
      return postData.filter((data) => {
        return checkSimilarArrays(data.tags, tagNameList) && (data.post.title.toLowerCase().includes(query) || data.username.toLowerCase().includes(query));
      })
    }
  };