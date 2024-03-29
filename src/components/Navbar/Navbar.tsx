import './Navbar.css'
import logo from '../../assets/images/grape.png'

//import router and mui library
import { Link } from 'react-router-dom'
import { Person } from '@mui/icons-material';

//navigation bar component with links that render conditionally based on which page you are on
export const Navbar = (props: { onHomePage: boolean, onForumPage: boolean }) => {
    return (
        <div className="navbar" style={{ backgroundColor: props.onHomePage ? '#f7c516' : '#FFC000'}}>
            <div className='logo-text'><img src={logo} alt='error'></img> grapevine</div>
            {props.onHomePage && 
            <ul className='links'>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>}
            {props.onForumPage && 
            <ul className='links'>
                <li><Link to='/posts/new'>Create Post</Link></li>
                <li><Link to='/' onClick={() => localStorage.removeItem('token')}>Log Out</Link></li>
                <li className='icon'><Person/></li>
                <li className='user'>{localStorage.getItem('username')}</li>
            </ul>}
        </div>
    );
}