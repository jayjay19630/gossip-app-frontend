import { Navbar } from '../../components/navbar/Navbar';
import { ForumContent } from './ForumContent/ForumContent';
import { SearchBar } from './SearchBar/SearchBar';
import './index.css'
import { Loading } from './Loading/Loading';
import { usePosts } from '../../utils/usePosts';

export const Forum = () => {

    const {postData, loading} = usePosts();
    const orderedPostData = postData.slice(0).reverse();

    //create loading screen while fetching
    if (loading) return (
        <>
            <Navbar onHomePage={false} onForumPage={true}/>
            <Loading/>
        </>
    );

    //show all posts after fetching
    return (
        <div className='forum'>
            <Navbar onHomePage={false} onForumPage={true}/>
            <SearchBar/>
            <ForumContent postData={orderedPostData}/>
        </div>
    );
}