import { Button, Typography } from "@mui/material";
import { Navbar } from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import './Error.css'

export const Error = () => {
    return (
        <>
            <Navbar onHomePage={false} onForumPage={true}></Navbar>
            <Typography sx={{ color: 'white', fontFamily: 'arial', fontSize: 30, fontWeight: 'bold', textAlign: 'center', marginTop: 30, marginBottom: 5 }}>
                You are not authorised to view this page!
            </Typography>
            <div className="button">
                <Link to="/posts"><Button sx={{ justifyContent: 'center', background: 'orange', color: "white", fontWeight: 'bold'}}>Go back to forum</Button></Link>
            </div>
            
        </>
    );
}