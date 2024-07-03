import { useState, useEffect } from 'react';
import BreweryCardFullInformation from "../../components/BreweryCardFullInformation/BreweryCardFullInformation";
import { Brewery } from "../../types/brewery";

export default function RandomBrewery() {
    const [breweries, setBreweries] = useState([]);
    useEffect(() => {
        fetch('https://api.openbrewerydb.org/v1/breweries/random')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setBreweries(data);
            });
    }, []);

    return (
        <div className="all-brieweriesHome">
            <div className="all-breweries">
                {breweries.map((brewery:Brewery) => <BreweryCardFullInformation brewery={brewery} />)}
            </div>
        </div>
    );
}