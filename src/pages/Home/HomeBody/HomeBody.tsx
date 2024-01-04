import { Card, CardActionArea, CardContent, Typography, CardActions, IconButton } from '@mui/material'
import './homebody.css'
import { Favorite } from '@mui/icons-material'
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export const HomeBody = () => {

    const dateObject = new Date();
    const date = dateObject.toDateString();
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    const wordlimit = 100;
    const shortenedContent = content.length > wordlimit ? content.substring(0, wordlimit) + "..." : content;

    //typewriter effect
    const [text] = useTypewriter({
        words: ["CS1101S was so hard...", "What are NUS extracurriculars like?", "Relationship problem, need help", "Any advice on internship?", "I need to rant about this"],
        loop: {},
        deleteSpeed: 30
    })

    return (
        <div className='home-body'>
            <div className='example'>
                <Card sx={{ width: 800 }}>
                    <CardActionArea disableRipple sx={{backgroundColor: "#f0f0f0"}}>
                        <CardContent>
                            <Typography sx={{fontSize: 20, fontWeight: 550}} component="div">
                                {" " + text}
                                <Cursor cursorStyle='|'></Cursor>
                            </Typography>
                            <Typography sx={{fontSize: 16, fontWeight: 550}} gutterBottom>
                                by Jonathan
                            </Typography>
                            <Typography sx={{fontSize: 16}} gutterBottom >
                                {shortenedContent}
                            </Typography>
                            <Typography sx={{fontSize: 16}}>
                                {"Last updated " + date}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions disableSpacing sx={{height: 25}}>
                        <IconButton aria-label="add to favorites">
                            <Favorite/>
                        </IconButton>
                        <Typography sx={{fontSize: 16}}>
                                {"155 Likes"} 
                        </Typography>
                    </CardActions>
                </Card>
            </div>
            <div className='example-text'>Anything and everything all on one site...</div>
        </div>
    )
}