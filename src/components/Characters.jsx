import Card from "react-bootstrap/Card";
const Characters = ({ characters }) => {

  return (
    <>
      <h1 className="text-light">Personajes</h1>
      <div className="row">
        {characters.map((item, index) => (
          <div key={index} className="col">
            <Card>
              <Card.Img src={item.image} alt={item.name} style={{ width: "20rem" }} />
              <div className="card-body">
                <h3 className="card-title text-light">{item.name}</h3>
                <h4 className="card-title text-light">{item.species}</h4>
                <h4 className="card-title text-light">{item.house}</h4>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};
export default Characters;
