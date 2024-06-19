export function BrieweryInterface(name: string, country: string, city: string) {
    return (
        <div className="breweryContainer">
            <h2 className="breweryName">Briewery name: {name}</h2>
            <p className="breweryDescription">
                <span>Country: {country}</span>
                <span>City: {city}</span>
            </p>
        </div>
    );
}