// eslint-disable-next-line react/prop-types
const Card = ({ common, png }) => {
  return (
    <div>
      <div
        className="countryCard"
        style={{
          width: "200px",
          height: "200px",
          border: "1px solid grey",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <img
          src={png}
          alt={common}
          style={{ width: "200px", height: "150px" }}
        />
        <p>{common}</p>
      </div>
    </div>
  );
};

export default Card;
