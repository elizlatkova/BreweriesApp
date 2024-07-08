import { useEffect, useState } from "react";
import BreweryCard from "../BreweryCard/BreweryCard";
import { Brewery } from "../../types/brewey";
import { fetchData } from "../../api/fetchData";

export default function AllBrieweriesHome() {
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  // create a constants file and put it there

  useEffect(() => {
    const res = fetchData();
    console.log("RES", res);

    setBreweries(res);
  }, []);

  return (
    <div className="all-brieweriesHome">
      <div className="all-breweries">
        {breweries.length > 0 &&
          breweries.map((brewery: Brewery) => (
            <BreweryCard brewery={brewery} />
          ))}
      </div>
    </div>
  );
}