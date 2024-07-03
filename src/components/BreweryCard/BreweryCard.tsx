import "./BreweryCard.css";
import {Brewery} from "../../types/brewery";

type BreweryCardProps = {
    brewery: Brewery
}

export default function BrieweryCard({ brewery }: BreweryCardProps) {
    return (
        <div className="brewery-container">
            <h2 className="brewery-name">{brewery.name}</h2>
            <p className="brewery-description">
                <b>Type:</b> {brewery.brewery_type}
                <br />
                <b>Country:</b> {brewery.country}
                <br />
                <b>City:</b> {brewery.city}
            </p>
            <div className="div-btn-brewery-card">
                <button className="btn-brewery-card">Full information</button>
            </div>
        </div>
    );
}