import { Box, FormControlLabel, Checkbox } from "@mui/material"

export const LoginCheckbox = () => {
    return (
        <Box>
            <FormControlLabel label="Remember me" control={<Checkbox/>}/>
        </Box>
    )
}