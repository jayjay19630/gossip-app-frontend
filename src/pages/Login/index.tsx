import { SignupLoginForm } from '../../components/Forms/SignupLoginForm/SignupLoginForm';
import './index.css';

export const Login = () => {
    return (
        <div className="login">
            <SignupLoginForm state="login"/>
        </div>
    );
}