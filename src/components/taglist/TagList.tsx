import { Stack } from "@mui/material";
import { useTagData } from "../../utils/useTagData";
import { Tag } from "../tags/tag";



export const TagList = (props: {passChildData: Function, tagsArr: number[]}) => {
    const tagData = useTagData();
    return (
        <Stack direction={'row'}>
            {tagData.map(tag => <Tag key={tag.id} id={tag.id} tagname={tag.tag_name} clickable={true} onPost={false} tagsArr={props.tagsArr} passChildData={props.passChildData}></Tag>)}
        </Stack>
    )

}