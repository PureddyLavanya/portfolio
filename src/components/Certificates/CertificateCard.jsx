import React from "react";
import Card from "react-bootstrap/Card";

const CertificateCard = (props) => {
  return (
    <Card
      className="project-card-view"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-between",
      }}
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          height: "300px",
          objectFit: "contain",
          alignSelf: "flex-start",
          borderRadius: "10%",
        }}
      />
        <Card.Title>{props.title}</Card.Title>
    </Card>
  );
};
export default CertificateCard;
