import "./BreweryCard.css"

export default function BrieweryInterface({brewery}:{brewery:any}) {
    console.log(typeof(brewery));
    
    return (
        <div className="breweryContainer">
            <h2 className="breweryName">Briewery name: {brewery.name}</h2>
            <p className="breweryDescription">
                <span>Country: {brewery.country}</span>
                <br />
                <span>City: {brewery.city}</span>
            </p>
        </div>
    );
}