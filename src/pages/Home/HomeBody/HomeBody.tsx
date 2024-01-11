import './homebody.css'
import { Tag } from '../../../components/tags/Tag';

//ui components and icons from mui library
import { Card, CardActionArea, CardContent, Typography, CardActions, IconButton } from '@mui/material'
import { Favorite } from '@mui/icons-material'

//typewriter effect from react simple typewriter library
import { useTypewriter, Cursor } from 'react-simple-typewriter';

//home body component consisting of a sample post with alternating titles that change using typewriter effect
export const HomeBody = () => {

    //current date and sample content shortened by word limit
    const dateObject = new Date();
    const date = dateObject.toDateString();
    const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    const wordlimit = 100;
    const shortenedContent = content.length > wordlimit ? content.substring(0, wordlimit) + "..." : content;

    //text string with typewriter effect looping through
    const [text] = useTypewriter({
        words: ["CS1101S was so hard...", "What are NUS extracurriculars like?", "Relationship problem, need help", "Any advice on internship?", "I need to rant about this"],
        deleteSpeed: 30,
        loop: false
    })

    //body component with black background and an enlarged sample post with sample tags
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
                        <Tag tagname={'NUS'} clickable={false} id={0} tagsArr={[]} passChildData={undefined}></Tag>
                        <Tag tagname={'Computer Science'} clickable={false} id={1} tagsArr={[]} passChildData={undefined}></Tag>
                    </CardActions>
                </Card>
            </div>
            <div className='example-text'>Anything and everything all on one site...</div>
        </div>
    )
}