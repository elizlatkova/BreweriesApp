export default function BrieweryInterface({breweryName, country, city}) {
    return (
        <div className="breweryContainer">
            <h2 className="breweryName">Briewery name: {breweryName}</h2>
            <p className="breweryDescription">
                <span>Country: {country}</span>
                <span>City: {city}</span>
            </p>
        </div>
    );
}