import './index.css'

//import components from other files
import { Navbar } from '../../components/Navbar/Navbar';
import { ForumContent } from './ForumContent/ForumContent';
import { SearchBar } from './SearchBar/SearchBar';
import { Loading } from '../../components/Loading/Loading';

//import usePost fetch hook util function
import { usePosts } from '../../utils/usePosts';
import { useState } from 'react';
import { PostArray } from '../../data/PostType';

//forum component with navbar and content page. shows loading screen if necessary
export const Forum = () => {

    //state for searchquery
    const [searchQuery, setSearchQuery] = useState("");
    console.log(searchQuery);

    //get post data and loading state, filter data according to query, and order posts in order of date published using reverse
    const {postData, loading} = usePosts();
    const filterData = (query: string, postData: PostArray) => {
        if (query === "") {
          return postData;
        } else {
          return postData.filter((d) => d.post.title.toLowerCase().includes(query));
        }
      };
    const orderedPostData = filterData(searchQuery, postData).slice(0).reverse();

    //create loading screen while fetching posts
    if (loading) return (
        <>
            <Navbar onHomePage={false} onForumPage={true}/>
            <Loading/>
        </>
    );

    //show all posts after fetching posts
    return (
        <div className='forum'>
            <Navbar onHomePage={false} onForumPage={true}/>
            <SearchBar setSearchQuery={setSearchQuery}/>
            <ForumContent postData={orderedPostData}/>
        </div>
    );
}