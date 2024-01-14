import './searchbar.css'

//import mui library and relevant components/types
import { Card, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from "@mui/material";
import { SearchRounded } from '@mui/icons-material';
import { TagList } from '../../../components/Taglist/TagList';

//a search bar component that filters forum content based on search query, toggled tags, dates and likes
export const SearchBar = (props: { setSearchQuery: Function, setToggledTagsArr: Function, setSelectedState: Function, selectedState: string, tagsArr: number[] }) => {

    //declare search query
    const setSearchQuery = props.setSearchQuery;

    //creating state for filter (date or likes)
    const handleChange = (event: SelectChangeEvent) => {
        props.setSelectedState(event.target.value as string);
    }


    return (
        <Stack alignItems={'center'} sx={{marginTop: 4, marginBottom: 4}}>
            <form className='search-input'>
                <Card sx={{padding: 2, borderRadius: 0.5}}>
                    <Stack direction={'row'} spacing={1} sx={{marginBottom: 2}}>
                        <TextField
                            id="search-bar"
                            className="text"
                            sx={{ width: 640, marginBottom: 2}}
                            onInput={(e) => {
                                const { target } = e;
                                if (target) setSearchQuery
                                setSearchQuery((target as HTMLButtonElement).value);
                            }}
                            label="Search for author or title..."
                            variant="outlined"
                            size="small"
                        
                        />
                        <FormControl variant='filled' sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="select-filter">Filter by</InputLabel>
                            <Select
                                id="select-filter"
                                value={props.selectedState}
                                label="Filter By"
                                onChange={handleChange}
                                size='small'
                                sx={{ fontSize: 12 }}
                                
                            >
                                <MenuItem value="date">Date</MenuItem>
                                <MenuItem value="likes">Likes</MenuItem>
                            </Select>
                        </FormControl>
                        
                        <SearchRounded style={{ fill: "orange", marginTop: 10, marginLeft: 10 }} />
                    </Stack>
                    <TagList passChildData={props.setToggledTagsArr} tagsArr={props.tagsArr}/>
                </Card>
            </form>
        </Stack>
    );
}