//import mui and react libraries, along with relevant types
import { Card, CardActionArea, Typography } from "@mui/material"
import { useState } from "react"
import { TagType } from "../../data/TagType";

//tag component that can be edited to clickable and manage state of selected tag list during post creation
export const Tag = (props: TagType) => {

    //manage toggled tags array during post creation using helper function
    const setToggledTagsArr = props.passChildData as Function;
    const toggledTagsArr = props.tagsArr;
    const tagId = props.id as number;

    function toggleClicked(id: number) {
        const index = toggledTagsArr.indexOf(id);
        if (index > -1) {
            toggledTagsArr.splice(index, 1);
            setToggledTagsArr(toggledTagsArr);
        } else {
            setToggledTagsArr([...toggledTagsArr, id]);
        }
    }

    //use state to detect whether a tag has been clicked on not
    const [click, setClick] = useState(false);

    //renders tag with changing background only if clickable property is true
    return (
        <Card elevation={0} sx={{marginLeft: 1}}>
            <CardActionArea 
                sx={{ padding: 0.5, maxHeight: 30, maxWidth: 500, backgroundColor: !props.clickable ? "orange" : click ? "orange" : "#C5C6D0", borderRadius: 1 }} 
                onClick={() => {
                    setClick(!click);
                    if (props.passChildData !== undefined) {
                        toggleClicked(tagId);
                    }
                }}
                disableRipple
            >
                <Typography sx={{ fontSize: 12, fontWeight: 'bold' }}>
                    {props.tagName}
                </Typography>
            </CardActionArea>
        </Card>
        
    )
}