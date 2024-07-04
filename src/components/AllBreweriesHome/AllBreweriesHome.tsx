// import { useEffect } from 'react';
import BreweryCard from "../BreweryCard/BreweryCard";
import { Brewery } from "../../types/brewery";
import { FetchData } from "../../api/fetchData";

type BreweryCardProps = {
    brewery: Brewery
}

export default async function AllBrieweriesHome() {
    let breweries: Array<BreweryCardProps> = [];
    let urlAllData: string = 'https://api.openbrewerydb.org/v1/breweries';
    
    await FetchData(urlAllData);

    return (
        <div className="all-brieweriesHome">
            <div className="all-breweries">
                {breweries.map(({ brewery }: BreweryCardProps) => <BreweryCard brewery={brewery} />)}
            </div>
        </div>
    );
}