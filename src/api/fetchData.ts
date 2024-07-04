import { useState, useEffect } from 'react';

export async function FetchData(urlData: string) {
    const [breweries, setBreweries] = useState([]);

    useEffect(() => {
        fetch(urlData)
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setBreweries(data);
            });
        console.log(breweries);
    }, []);
    return breweries
}

