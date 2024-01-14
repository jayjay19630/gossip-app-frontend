import './index.css'

//import components and relevantfrom other files
import { Navbar } from '../../components/Navbar/Navbar';
import { ForumContent } from './ForumContent/ForumContent';
import { SearchBar } from './SearchBar/SearchBar';
import { Loading } from '../../components/Loading/Loading';
import { PostArray } from '../../data/PostType';

//import hooks and relevant types
import { usePosts } from '../../utils/usePosts';
import { useState } from 'react';
import { useTagData } from '../../utils/useTagData';
import { checkSimilarArrays } from '../../utils/checkSimilarArray';
import { TagDataType } from '../../data/TagType';

//forum component with navbar and content page. shows loading screen if necessary
export const Forum = () => {

    //state for searchquery and toggled tags
    const [searchQuery, setSearchQuery] = useState("");
    const [toggledTagsArr, setToggledTagsArr] = useState([]);
    const tagList = useTagData() as TagDataType[];
    const tagNameList = toggledTagsArr.map(tagId => tagList[tagId - 1].tag_name);
    
    //get post data and loading state, filter data according to query, and order posts by date published using reverse
    const {postData, loading} = usePosts();
    const filterData = (query: string, postData: PostArray) => {
        if (query === "" && tagNameList.length === 0) {
          return postData;
        } else {
          return postData.filter((d) => 
            checkSimilarArrays(d.tags, tagNameList) && (
            d.post.title.toLowerCase().includes(query) || 
            d.username.toLowerCase().includes(query)
            ))
        }
      };
    const orderedPostData = filterData(searchQuery.toLowerCase(), postData).slice(0).reverse();

    //show all posts after loading and fetching posts
    return (
        <div className='forum'>
            <Navbar onHomePage={false} onForumPage={true}/>
            {loading 
                ? <Loading/> 
                : <>
                    <SearchBar setSearchQuery={setSearchQuery} setToggledTagsArr={setToggledTagsArr} tagsArr={toggledTagsArr}/>
                    <ForumContent postData={orderedPostData}/>
                  </>
            }
        </div>
    );
}