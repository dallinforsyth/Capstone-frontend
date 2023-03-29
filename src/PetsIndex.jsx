import { Link } from "react-router-dom";
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

export function PetsIndex(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <h1>All pets</h1>
      {props.pets.map((pet) => (
        <div key={pet.id}>
          <h2>{pet.name}</h2>
          <img style={{ maxHeight: 300, maxWidth: 300 }} src={pet.image_url} />
          <p>Birthday: {pet.birthday}</p>
          {/* <p>User_id: {pet.user_id}</p> */}
          <p>Breed: {pet.breed.classification}</p>
          <p>Species: {pet.breed.animal_type}</p>

          <button onClick={() => props.onShowPet(pet)}>More info</button>
        </div>
      ))}
    </div>
  );
}
