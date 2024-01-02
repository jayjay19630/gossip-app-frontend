import { Link } from 'react-router-dom'
import { UIButton } from '../../../components/ui/UIButton'
import './homesignup.css'

export const HomeSignup = () => {
    return (
        <div className="home-signup">
            <img src='src/assets/nus-auditorium.jpg'></img>
            <div className='text-overlay'>Make rumors come to life.</div>
            <Link to='/signup'><UIButton text='SIGN UP NOW'></UIButton></Link>
        </div>
    )
}