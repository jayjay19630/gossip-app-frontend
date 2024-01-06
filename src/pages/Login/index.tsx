import { Formbox } from '../../components/form/signup-login-form/Formbox';
import './index.css';

export const Login = () => {
    return (
        <div className="login">
            <Formbox state="login"></Formbox>
        </div>
    );
}