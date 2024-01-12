import { Button } from '@mui/material'

export  const UIButton = (props: { text: string }) => {
    return (
        <Button variant='contained' color='primary' disableRipple>{props.text}</Button>
    );
}