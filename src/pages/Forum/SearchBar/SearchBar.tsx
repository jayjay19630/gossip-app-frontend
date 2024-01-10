import { Stack } from "@mui/material";
import { Tag } from "../../../components/tags/tag";
import './searchbar.css'
import { useTagData } from "../../../utils/useTagData";

export const SearchBar = () => {

    const tagList = useTagData();

    return (
        <div className="tag-list">
            <Stack direction="row" sx={{ width: 710, flexWrap: "wrap"}}>
                {tagList.map(tag => <li key={tag.id}><Tag tagname={tag.tag_name} clickable={true} onPost={false}/></li>)}
            </Stack>
        </div>
    );
}