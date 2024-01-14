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
import { filterPostData } from '../../utils/filterPostData';
import { orderPostData } from '../../utils/orderPostData';

//forum component with navbar and content page. shows loading screen if necessary
export const Forum = () => {

    //state for searchquery and toggled tags
    const [searchQuery, setSearchQuery] = useState("");
    const [toggledTagsArr, setToggledTagsArr] = useState([]);
    

    //state for filter mode (likes or date)
    const [selectedState, setSelectedState] = useState("date"); 
    
    //get post data and loading state, filter data according to query, and order posts
    const {postData, loading} = usePosts();
    const filteredPostData = filterPostData(searchQuery, postData, toggledTagsArr);
    const orderedPostData = orderPostData(filteredPostData, selectedState) as PostArray;

    //show all posts after loading and fetching posts
    return (
        <div className='forum'>
            <Navbar onHomePage={false} onForumPage={true}/>
            {loading 
                ? <Loading/> 
                : <>
                    <SearchBar setSearchQuery={setSearchQuery} setToggledTagsArr={setToggledTagsArr} setSelectedState={setSelectedState} selectedState={selectedState} tagsArr={toggledTagsArr}/>
                    <ForumContent postData={orderedPostData}/>
                  </>
            }
        </div>
    );
}