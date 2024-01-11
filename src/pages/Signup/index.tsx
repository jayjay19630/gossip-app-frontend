import { SignupLoginForm } from '../../components/Forms/SignupLoginForm/SignupLoginForm';
import './index.css';

export const Signup = () => {
    return (
        <>
            <div className="signup">
                <SignupLoginForm state="signup"/>
            </div>
        </>
        
    );
}