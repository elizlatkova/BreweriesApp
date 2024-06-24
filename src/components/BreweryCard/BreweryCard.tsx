import "./BreweryCard.css"

export default function BrieweryInterface({brewery}:{brewery:any}) {
    return (
        <div className="brewery-container">
            <h2 className="brewery-name">{brewery.name}</h2>
            <p className="brewery-description">
                <span><b>Country:</b> {brewery.country}</span>
                <br />
                <span><b>City:</b> {brewery.city}</span>
            </p>
        </div>
    );
}