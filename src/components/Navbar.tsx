import './Navbar.css'

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className='logo-text'>🍇 grapevine</div>
            <ul className='links'>
                <li><a href='#signup'>SIGNUP</a></li>
                <li><a href='#login'>LOGIN</a></li>
            </ul>
        </div>
    );
}