import { Card, Stack } from '@mui/material'
import { Navbar } from '../../components/Navbar/Navbar'
import { CreateUpdatePostForm } from '../../components/Forms/CreateUpdatePostForm/CreateUpdatePostForm'

export const Create = () => {
    return (
        <Stack spacing={2}>
            <Navbar onForumPage={true} onHomePage={false}/>
            <div className='body'>
                <Card sx={{ width: 900 }}>
                    <CreateUpdatePostForm/>
                </Card>
            </div>
        </Stack>
    )
}