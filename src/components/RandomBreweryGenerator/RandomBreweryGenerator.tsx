import { useState, useEffect } from 'react';
import BreweryCardFullInformation from "../BreweryCardFullInformation/BreweryCardFullInformation";
import { Brewery } from "../../types/brewery";

type BreweryCardProps = {
    brewery: Brewery
}

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
                {breweries.map(({ brewery }: BreweryCardProps) => <BreweryCardFullInformation brewery={brewery} />)}
            </div>
        </div>
    );
}