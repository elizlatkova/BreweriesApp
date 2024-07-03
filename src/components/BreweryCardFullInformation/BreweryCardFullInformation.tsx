import "./BreweryCardFullInformation.css";
import {Brewery} from "../../types/brewery";
// import { Link } from "react-router-dom";

type BreweryCardProps = {
    brewery: Brewery
}
export default function BreweryCardFullInformation({ brewery }: BreweryCardProps) {
    
    return (
        <div className="brewery-container">
            <h2 className="brewery-name">{brewery.name}</h2>
            {brewery.country && <p className="brewery-description">{brewery.country}</p>}
            < ></>
            {/* {checkIfBreweyHaveData(brewery.state)}
            {checkIfBreweyHaveData(brewery.city)}
            {checkIfBreweyHaveData(brewery.address_1)}
            <br />
            {checkIfBreweyHaveData(brewery.phone)}
            {checkIfBreweyHaveData(brewery.website_url)} */}

        </div>
    );
}