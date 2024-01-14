//import mui library
import { Stack } from "@mui/material";

//import relevant tag types
import { useTagData } from "../../utils/useTagData";
import { Tag } from "../Tag/Tag";
import { TagDataType } from "../../data/TagType";

//tag list component which has clickable tags and also manages state of tagsArr in parent component (see create post index for details)
export const TagList = (props: {passChildData: Function, tagsArr: number[]}) => {
    const tagData = useTagData() as TagDataType[];
    return (
        <Stack direction={'row'}>
            {tagData.map(tag => <Tag key={tag.id} id={tag.id} tagName={tag.tag_name} clickable={true} tagsArr={props.tagsArr} passChildData={props.passChildData}></Tag>)}
        </Stack>
    )

}