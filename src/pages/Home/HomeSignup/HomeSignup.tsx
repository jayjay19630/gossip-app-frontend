import { UIButton } from '../../../components/ui/UIButton'
import './homesignup.css'

export const HomeSignup = () => {
    return (
        <div className="home-signup">
            <img src='src/assets/nus-auditorium.jpg'></img>
            <div className='text-overlay'>Make rumors come to life.</div>
            <UIButton text='SIGN UP NOW'></UIButton>
        </div>
    )
}