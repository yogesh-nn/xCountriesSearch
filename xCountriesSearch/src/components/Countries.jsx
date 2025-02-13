import { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const api =
    "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";

  useEffect(() => {
    const apiData = async () => {
      try {
        const response = await fetch(api);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    apiData();
  }, []);
  return (
    <>
      <div className="searchbar">
        <input type="text" onChange={(e) => setSearchQuery(e.target.value)} />
      </div>
      <div
        style={{
          display: "flex",
          padding: "10px",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        {data
          .filter((name) => {
            if(searchQuery === "") return true;
            const regex = new RegExp(searchQuery, "i");
            return regex.test(name.common);
          })
          .map((countries) => (
            <Card
              key={countries.common}
              common={countries.common}
              png={countries.png}
            />
          ))}
      </div>
    </>
  );
};

export default Countries;
