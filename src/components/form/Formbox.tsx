import './formbox.css'
import { useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";
import { URL_NAME } from '../../data/url'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

//types for data received by form
type FormValues = {
    username: string;
}

//form component for both signup and login
export const Formbox = (props: {state :string}) => {

    const form = useForm({
        defaultValues: {
            username: ""
        }
    })
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;
    const [alreadyTakenError, setAlreadyTakenError] = useState(false);
    const [invalidUsernameError, setInvalidUsernameError] = useState(false);
    const navigate = useNavigate();

    //fetch post for signups
    const onSignupSubmit = (data: FormValues) => {

        //post username to backend and redirects to signup if already taken.
        fetch(`${URL_NAME}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (response.status === 422) {
                    setAlreadyTakenError(true);
                }
                return response.json();
            })
            .then((data) => {
                localStorage.setItem('username', data.user.username);
                localStorage.setItem('token', data.token);
                navigate('/posts');
            })
    }

    //fetch post for login
    const onLoginSubmit = (data: FormValues) => {

        //posts username to backend and redirects to login if it is not in database
        fetch(`${URL_NAME}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                if (response.status === 422) {
                    setInvalidUsernameError(true);
                }
                return response.json();
            })
            .then((data) => {
                localStorage.setItem('username', data.user.username);
                localStorage.setItem('token', data.token);
                navigate('/posts');
            })
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

