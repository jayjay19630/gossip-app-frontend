import { Link } from 'react-router-dom'
import { UIButton } from '../../../components/Button/UIButton'
import lt27pic from '../../../assets/images/nus-auditorium.jpg'
import './HomeSignup.css'

//signup component with link to signup page
export const HomeSignup = () => {
    return (
        <div className="home-signup">
            <img src={lt27pic}></img>
            <div className='text-overlay'>Make rumors come to life.</div>
            <Link to='/signup'><UIButton text='SIGN UP NOW'></UIButton></Link>
        </div>
    )
}