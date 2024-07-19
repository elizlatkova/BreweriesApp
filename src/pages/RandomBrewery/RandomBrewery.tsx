import "./RandomBrewery.css"

export function RandomBrewery() {
    return (
        <>
            <h1 className="random-page-title">Random brewery generator</h1>
            <hr/>
            <div className="random-brewery"></div>
            <button className="btn-generate-random-brewery">Generate new brewery</button>
        </>
    );
}