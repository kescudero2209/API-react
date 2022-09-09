import { useEffect, useState } from "react";
import Characters from "./Characters";

const baseUrl = "https://hp-api.herokuapp.com/api/characters";

const MiApi = () => {
  const [name, setName] = useState([]);
  const fetchCaract = async () => {
    const resp = await fetch(baseUrl);
    const data = await resp.json();
    const result = data.filter((word) => word.image !== "");
  
    result.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    setName(result);
  };

  useEffect(() => {
    console.log("useEffect");
    fetchCaract();
  }, []);

  return (
    <>
      <div className="container">
      <Characters characters={name} />
      </div>
    </>
  );
};
export default MiApi;
