import { Link } from 'react-router-dom'
import './Navbar.css'
import { Person } from '@mui/icons-material';

export const Navbar = (props: { onHomePage: boolean, onForumPage: boolean }) => {
    return (
        <div className="navbar">
            <div className='logo-text'><img src='src/assets/images/grape.png'></img> grapevine</div>
            {props.onHomePage && 
            <ul className='links'>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>}
            {props.onForumPage && 
            <ul className='links'>
                <li><Link to='/create'>Create Post</Link></li>
                <li><Link to='/' onClick={() => localStorage.removeItem('token')}>Log Out</Link></li>
                <li className='icon'>  <Person/></li>
                <li className='user'>{localStorage.getItem('username')}</li>
            </ul>}
        </div>
    );
}