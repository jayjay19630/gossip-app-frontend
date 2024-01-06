import { CardActionArea, Typography } from "@mui/material"
import { useState } from "react"

export const Tag = (props: {tagname: string}) => {

    const [click, setClick] = useState(false);

    return (
        <CardActionArea 
            sx={{ maxWidth: 30, maxHeight: 30, backgroundColor: click ? "gray" : "red" }} 
            onClick={() => setClick(!click)}
        >
            <Typography sx={{ fontSize: 5 }}>
                {props.tagname}
            </Typography>
        </CardActionArea>
    )
}