import { Card, CardActionArea, Typography } from "@mui/material"
import { useState } from "react"

export const Tag = (props: {tagname: string, clickable: boolean, onPost: boolean}) => {

    const [click, setClick] = useState(false);

    return (
        <Card elevation={0} sx={{marginLeft: 1}}>
            <CardActionArea 
                sx={{ padding: 0.5, maxHeight: 30, maxWidth: 500, backgroundColor: props.onPost ? "orange" : (props.clickable && click) ? "orange" : "#C5C6D0", borderRadius: 1 }} 
                onClick={() => setClick(!click)}
                disableRipple
            >
                <Typography sx={{ fontSize: props.onPost ? 10 : 12 , fontWeight: 'bold' }}>
                    {props.tagname}
                </Typography>
            </CardActionArea>
        </Card>
        
    )
}