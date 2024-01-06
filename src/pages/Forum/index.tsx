import { Navbar } from '../../components/navbar/Navbar';
import { ForumContent } from './ForumContent/ForumContent';
import { SearchBar } from './SearchBar/SearchBar';
import './index.css'

export const Forum = () => {
    return (
        <>
            <Navbar onHomePage={false} onForumPage={true}/>
            <SearchBar/>
            <ForumContent/>
        </>
    );
}