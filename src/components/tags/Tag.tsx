import { CardActionArea, Typography } from "@mui/material"
import { useState } from "react"

export const Tag = (props: {tagname: string, clickable: boolean}) => {

    const [click, setClick] = useState(false);

    return (
        <CardActionArea 
            sx={{ padding: 0.5, marginTop: 0, backgroundColor: (props.clickable && click) ? "orange" : "#C5C6D0", borderRadius: 1 }} 
            onClick={() => setClick(!click)}
        >
            <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>
                {props.tagname}
            </Typography>
        </CardActionArea>
    )
}