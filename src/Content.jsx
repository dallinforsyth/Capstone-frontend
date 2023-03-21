import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { PetsIndex } from "./PetsIndex";
import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
import { PetsNew } from "./PetsNew";

export function Content() {
  const [pets, setPets] = useState([]);

  const handleIndexPets = () => {
    console.log("handleIndexPets");
    axios.get("http://localhost:3000/pets.json").then((response) => {
      console.log(response.data);
      setPets(response.data);
    });
  };

  const handleCreatePet = (params, successCallback) => {
    console.log("handleCreatePet", params);
    axios.post("http://localhost:3000/pets.json", params).then((response) => {
      setPets([...pets, response.data]);
      successCallback();
    });
  };

  useEffect(handleIndexPets, []);

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <PetsNew onCreatePet={handleCreatePet} />
      <PetsIndex pets={pets} />
      <h1>Welcome to React!</h1>
    </div>
  );
}
