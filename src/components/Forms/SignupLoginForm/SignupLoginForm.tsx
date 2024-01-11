import './SignupLoginForm.css'

//import reacthookform library, router library, mui components and util functions
import { useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { postSignup } from '../../../utils/postSignup';
import { postLogin } from '../../../utils/postLogin';

//form component for both signup and login
export const SignupLoginForm = (props: {state :string}) => {

    //use react hook form library to create form
    const form = useForm({
        defaultValues: {
            username: ""
        }
    })
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    //create states for when usenrame is invalid or when username is already taken
    const [alreadyTakenError, setAlreadyTakenError] = useState(false);
    const [invalidUsernameError, setInvalidUsernameError] = useState(false);

    //navigate function incase of user inauthentication
    const navigate = useNavigate();

    //onsubmit functions for when signup or login form is submitted
    const onSignupSubmit = (data: {username: string}) => {
        postSignup(data.username, setAlreadyTakenError).then(() => navigate('/posts'));
    }

    const onLoginSubmit = (data: {username: string}) => {
        postLogin(data.username, setInvalidUsernameError).then(() => navigate('/posts'));
    }

    //conditionally renders login and signup forms
    //conditionally renders 'username already taken' error upon signup
    //conditionally renders 'invalid username' error upon login
    return (
        <form className="formbox" onSubmit={handleSubmit(props.state==='signup' ? onSignupSubmit : onLoginSubmit)} noValidate>
            <h1>{props.state==="signup" ? "Sign Up" : "Login"}</h1>
            <Stack spacing={2} width={400}>
                <TextField 
                    label='Username' 
                    type="username" 
                    {...register("username", {required: 'Username is required'})}
                    error={!!errors.username}
                    helperText={errors.username?.message}
                    sx={{input: {color: 'white'}}}
                    InputLabelProps={{
                        style: { color: '#ffffff' }, 
                     }}
                />
                {alreadyTakenError && <div className='error'>Username already taken!</div>}
                {invalidUsernameError && <div className='error'>Invalid username!</div>}
                {props.state==='login' && <div className='register'>Don't have an account? <Link to='/signup'>Register Here!</Link></div>}
                <Button className='formbutton' color='primary' type='submit' variant='contained'>{props.state==="signup" ? "Register" : "View Forum"}</Button>
            </Stack>
        </form>
    );
}