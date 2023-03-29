import { Link } from "react-router-dom";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function PetsIndex(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="centered-div">
      <h1>All pets</h1>
      {props.pets.map((pet) => (
        <div key={pet.id} className="my-5 mx-5">
          <Container>
            <Row>
              <Col>
                <img style={{ maxHeight: 300, maxWidth: 300 }} src={pet.image_url} />
              </Col>
              <Col>
                <h2>{pet.name}</h2>
                <p>Birthday: {pet.birthday}</p>
                {/* <p>User_id: {pet.user_id}</p> */}
                <p>Breed: {pet.breed.classification}</p>
                <p>Species: {pet.breed.animal_type}</p>
                <button onClick={() => props.onShowPet(pet)}>More info</button>
                <img
                  style={{ maxHeight: 300, maxWidth: 300 }}
                  src="https://www.freepnglogos.com/uploads/line-png/long-lines-straight-line-transparent-7.png"
                />
              </Col>
            </Row>
          </Container>
        </div>
      ))}
    </div>
  );
}
