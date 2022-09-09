import { useState } from "react";
import Card from "react-bootstrap/Card";

const Search = ({ characters }) => {
  const [search, setSearch] = useState("");
  const [print, setPrint] = useState([]);
  let results = [];
  const click = (e) => {
    e.preventDefault();

    if (!search) {
      alert("Campo vacío, favor llenar");
      return;
    } else {
      results = characters.filter(
        (charact) =>
          charact.name.toLowerCase().includes(search.toLowerCase()) ||
          charact.house.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (results.length === 0) {
      alert("Error, no existe en la lista");

      return;
    }

    setPrint(results);
  };

  return (
    <>
    
      <form onSubmit={click}>
    
        <h3 className="text-light">Búsqueda por nombre o casa en Hogwarts</h3>
        <input
          type="search"
          placeholder="Búsqueda"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button>Enviar</button>
        <a href="/API-react">Volver a la lista</a>
      </form>
      {print.length > 0 ? <h1 className="text-light">Resultado</h1> : null}
      <div className="row">
      
        {print
          ? print.map((item, index) => (
            
              <div key={index} className="col">
                <Card>
                  <Card.Img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "20rem" }}
                  />
                  <div className="card-body">
                    <h3 className="card-title text-light">{item.name}</h3>
                    <h4 className="card-title text-light">{item.species}</h4>
                    <h4 className="card-title text-light">{item.house}</h4>
                  </div>
                </Card>
              </div>
            ))
          : null}
      </div>
    </>
  );
};
export default Search;