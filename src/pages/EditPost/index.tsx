import { useParams } from "react-router-dom";
import { CreateUpdatePostForm } from "../../components/Forms/CreateUpdatePostForm/CreateUpdatePostForm";
import { Navbar } from "../../components/Navbar/Navbar";
import { Stack, Card } from "@mui/material";

export const Edit = () => {

    const { postId } = useParams();

    return (
        <Stack spacing={2}>
            <Navbar onForumPage={true} onHomePage={false}/>
            <div className='body'>
                <Card sx={{ width: 900 }}>
                <   CreateUpdatePostForm state={"edit"} postId={postId}></CreateUpdatePostForm>
                </Card>
            </div>
        </Stack>
    );
}