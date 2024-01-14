import './searchbar.css'

//import mui library and relevant components/types
import { Card, Stack, TextField } from "@mui/material";
import { SearchRounded } from '@mui/icons-material';
import { TagList } from '../../../components/Taglist/TagList';

//a search bar component that filters forum content based on search query and toggled tags
export const SearchBar = (props: { setSearchQuery: Function, setToggledTagsArr: Function, tagsArr: number[] }) => {

    const setSearchQuery = props.setSearchQuery;
    
    return (
        <Stack alignItems={'center'} sx={{marginTop: 4, marginBottom: 4}}>
            <form className='search-input'>
                <Card sx={{padding: 2, borderRadius: 0.5}}>
                    <TextField
                        id="search-bar"
                        className="text"
                        sx={{ width: 780, marginBottom: 2}}
                        onInput={(e) => {
                            const { target } = e;
                            if (target) setSearchQuery
                            setSearchQuery((target as HTMLButtonElement).value);
                        }}
                        label="Search for author or title..."
                        variant="outlined"
                        size="small"
                    />
                    <SearchRounded style={{ fill: "orange", marginTop: 10, marginLeft: 10 }} />
                    <TagList passChildData={props.setToggledTagsArr} tagsArr={props.tagsArr}/>
                </Card>
            </form>
        </Stack>
    );
}