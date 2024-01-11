import './index.css'

//import components from other files
import { Navbar } from '../../components/Navbar/Navbar';
import { ForumContent } from './ForumContent/ForumContent';
import { SearchBar } from './SearchBar/SearchBar';
import { Loading } from '../../components/Loading/Loading';

//import usePost fetch hook util function
import { usePosts } from '../../utils/usePosts';

//forum component with navbar and content page. shows loading screen if necessary
export const Forum = () => {

    //get post data and loading state, then order posts in order of date published using reverse
    const {postData, loading} = usePosts();
    const orderedPostData = postData.slice(0).reverse();

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
            <SearchBar/>
            <ForumContent postData={orderedPostData}/>
        </div>
    );
}