import { Stack } from "@mui/material";
import { useTagData } from "../../../utils/useTagData";
import { Tag } from "../../../components/Tag/Tag";
import { TagDataType } from "../../../data/TagType";



export const TagList = (props: {passChildData: Function, tagsArr: number[]}) => {
    const tagData = useTagData() as TagDataType[];
    return (
        <Stack direction={'row'}>
            {tagData.map(tag => <Tag key={tag.id} id={tag.id} tagName={tag.tag_name} clickable={true} tagsArr={props.tagsArr} passChildData={props.passChildData}></Tag>)}
        </Stack>
    )

}