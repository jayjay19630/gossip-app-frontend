import { Stack } from "@mui/material";
import { Tag } from "../../../components/tags/tag";
import './searchbar.css'

interface TagType {
    id: number,
    tag_name: string,
    created_at: string,
    updated_at: string
};
type TagArray = TagType[];

export const SearchBar = (props: {tagData: TagArray}) => {
    return (
        <div className="tag-list">
            <Stack direction="row" sx={{ width: 710, flexWrap: "wrap"}}>
                {props.tagData.map(tag => <li key={tag.id}><Tag tagname={tag.tag_name} clickable={true} onPost={false}/></li>)}
            </Stack>
        </div>
    );
}