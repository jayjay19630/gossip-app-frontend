import { Stack } from "@mui/material";
import { Tag } from "../../../components/Tag/Tag";
import './searchbar.css'
import { useTagData } from "../../../utils/useTagData";
import { TagDataType } from "../../../data/TagType";

export const SearchBar = () => {

    const tagList = useTagData() as TagDataType[];

    return (
        <div className="tag-list">
            <Stack direction="row" sx={{ width: 710, flexWrap: "wrap"}}>
                {tagList.map(tag => <li key={tag.id}><Tag tagName={tag.tag_name} clickable={true} id={tag.id} tagsArr={[]} passChildData={undefined}/></li>)}
            </Stack>
        </div>
    );
}