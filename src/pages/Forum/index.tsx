import { Navbar } from '../../components/Navbar';
import { ForumContent } from './ForumContent/ForumContent';
import { ForumHeader } from './ForumHeader/ForumHeader';
import './index.css'

export const Forum = () => {
    return (
        <>
            <Navbar onHomePage={false} onForumPage={true}/>
            <ForumHeader/>
            <ForumContent/>
        </>
    );
}