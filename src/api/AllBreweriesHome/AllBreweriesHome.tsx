import { useState, useEffect } from 'react';
import BreweryInterface from "../../components/BreweryCard/BreweryCard";

export default function AllBrieweriesHome() {
    const [breweries, setBreweries] = useState([]);
    useEffect(() => {
        fetch('https://api.openbrewerydb.org/v1/breweries?fbclid=IwZXh0bgNhZW0CMTAAAR1QKdPcqOwBI51QmYcnitDSFfKOnHlOLDSbxXadLJZgJJWfQ797QPTltHA_aem_ZmFrZWR1bW15MTZieXRlcw')
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
                {breweries.map((brewery:Object) => <BreweryInterface brewery={brewery} />)}
            </div>
        </div>
    );
}