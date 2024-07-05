import { useState } from 'react';

export async function FetchData(urlData: string) {
    const [breweries, setBreweries] = useState([]);

    fetch(urlData)
        .then((res) => {
            console.log(res);
            return res.json();
        })
        .then((data) => {
            console.log(data);
            setBreweries(data);
        })
        .catch((err: any) => console.log(err.message)
        );
    console.log(breweries);
    return breweries
}

