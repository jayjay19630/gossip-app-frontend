import './searchbar.css'

//import mui library and relevant components/types
import { Card, IconButton, Stack, TextField } from "@mui/material";
import { Tag } from "../../../components/Tag/Tag";
import { useTagData } from "../../../utils/useTagData";
import { TagDataType } from "../../../data/TagType";
import { SearchOff, SearchRounded } from '@mui/icons-material';

//a search bar component that filters forum content based on search query and toggled tags
export const SearchBar = (props: { setSearchQuery: Function }) => {

    const tagList = useTagData() as TagDataType[];
    const setSearchQuery = props.setSearchQuery;
    

    return (
        <Stack alignItems={'center'} sx={{marginTop: 4}}>
            <form className='search-input'>
                <Card sx={{padding: 2, borderRadius: 0.5}}>
                    <TextField
                        id="search-bar"
                        className="text"
                        sx={{ width: 630}}
                        onInput={(e) => {
                            setSearchQuery(e.target.value);
                        }}
                        label="Enter a post's title"
                        variant="outlined"
                        size="small"
                    />
                    <IconButton type="submit" aria-label="search">
                        <SearchRounded style={{ fill: "orange" }} />
                    </IconButton>
                </Card>
            </form>
            <div className="tag-list">
                <Stack direction="row" sx={{ width: 710, flexWrap: "wrap"}}>
                    {tagList.map(tag => <li key={tag.id}><Tag tagName={tag.tag_name} clickable={true} id={tag.id} tagsArr={[]} passChildData={undefined}/></li>)}
                </Stack>
            </div>
        </Stack>
    );
}