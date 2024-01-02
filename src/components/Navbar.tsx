import { Link } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className='logo-text'><img src='src/assets/images/grape.png'></img> grapevine</div>
            <ul className='links'>
                <li><Link to='/signup'>Sign Up</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </div>
    );
}