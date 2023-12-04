import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ItemTable from './ItemTable';

const Items = () =>  {
    const serverUrl = "http://localhost:4000/items";

    const [ item, setItem ] = useState([]);

    useEffect(() => {
        axios
            .get(serverUrl)
            .then((res) => {
                // console.log(res)
                setItem(() => {
                    return res.data;
                });
            })
            .catch((err) => {
                console.log(err)
            }) 
    }, [serverUrl])

    return (
        <>
            <ItemTable item={item} />
        </>
    )
};

export default Items;