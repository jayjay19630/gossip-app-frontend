import { useEffect, useState } from "react";
import { URL_NAME } from "../data/url";

export const useTagData = () => {
    const [tagData, setTagData] = useState([])
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