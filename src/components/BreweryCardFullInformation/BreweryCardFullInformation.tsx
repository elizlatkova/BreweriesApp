import "./BreweryCardFullInformation.css";
import "../../types/brewey"
// import { Link } from "react-router-dom";

export default function BrieweryInterface({ brewery }: { brewery: any }) {
    let breweryDescriptionLabel: Array<string> = ["Country:", "State:", "City:", "Address:", "Phone:", "Website:"];
    let breweryDescription: Array<string | null> = [brewery.country, brewery.state, brewery.city, brewery.address_1, brewery.phone, brewery.website_url];
    function checkIfBreweyHaveData(data: string | null) {
        if (data) {
            return (
                <>
                    <b>{breweryDescriptionLabel[breweryDescription.indexOf(data)]}</b> {data}
                    <br />
                </>
            )
        }
    }
    return (
        <div className="brewery-container">
            <h2 className="brewery-name">{brewery.name}</h2>
            <p className="brewery-description">
                {checkIfBreweyHaveData(brewery.country)}
                {checkIfBreweyHaveData(brewery.state)}
                {checkIfBreweyHaveData(brewery.city)}
                {checkIfBreweyHaveData(brewery.address_1)}
                <br />
                {checkIfBreweyHaveData(brewery.phone)}
                {checkIfBreweyHaveData(brewery.website_url)}
            </p>
        </div>
    );
}