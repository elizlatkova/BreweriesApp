import "./BreweryCard.css";
import "../../types/brewey"

export default function BrieweryCard({brewery}:{brewery:any}) {
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
        </div>
    );
}