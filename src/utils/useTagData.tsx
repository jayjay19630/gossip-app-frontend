import { useEffect, useState } from "react";
import { URL_NAME } from "../../config";

//custom hook for fetching all tags
export const useTagData = () => {

    //store tags in a state on mount
    const [tagData, setTagData] = useState([])

    //fetching on mount
    useEffect(() => {

        fetch(`${URL_NAME}/tags`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token') 
            },
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                setTagData(data);
            })

    }, []);
    
    return tagData;
}