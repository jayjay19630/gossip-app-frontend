import { Card, CardActionArea, Typography } from "@mui/material"
import { useState } from "react"
import { TagType } from "../../data/TagType";

export const Tag = (props: TagType) => {

    const setToggledTagsArr = props.passChildData;
    const toggledTagsArr = props.tagsArr;

    function toggleClicked(id: number) {
        const index = toggledTagsArr.indexOf(id);
        if (index > -1) {
            toggledTagsArr.splice(index, 1);
            setToggledTagsArr(toggledTagsArr);
        } else {
            setToggledTagsArr([...toggledTagsArr, id]);
        }
    }

    const [click, setClick] = useState(false);

    return (
        <Card elevation={0} sx={{marginLeft: 1}}>
            <CardActionArea 
                sx={{ padding: 0.5, maxHeight: 30, maxWidth: 500, backgroundColor: !props.clickable ? "orange" : click ? "orange" : "#C5C6D0", borderRadius: 1 }} 
                onClick={() => {
                    setClick(!click);
                    if (props.passChildData !== undefined) {
                        toggleClicked(props.id);
                    }
                }}
                disableRipple
            >
                <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>
                    {props.tagname}
                </Typography>
            </CardActionArea>
        </Card>
        
    )
}