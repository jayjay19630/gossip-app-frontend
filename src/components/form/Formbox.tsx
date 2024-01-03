import './formbox.css'
import { useForm } from "react-hook-form";
import { Button, Stack, TextField } from "@mui/material";

type FormValues = {
    username: string;
}

export const Formbox = (props: {state :string}) => {

    const form = useForm({
        defaultValues: {
            username: ""
        }
    })

    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data: FormValues) => {
        console.log(data);
    }
      

    return (
        <form className="formbox" onSubmit={handleSubmit(onSubmit)} noValidate>
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
                <Button className='formbutton' color='primary' type='submit' variant='contained'>{props.state==="signup" ? "Register" : "View Forum"}</Button>
            </Stack>
        </form>
    );
}