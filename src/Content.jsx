import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { PetsIndex } from "./PetsIndex";
import axios, { Axios } from "axios";
import { useState, useEffect } from "react";
import { PetsNew } from "./PetsNew";
import { Modal } from "./Modal";
import { PetsShow } from "./PetShow";
import { FoodSchedulesNew } from "./FoodSchedulesNew";

export function Content() {
  const [pets, setPets] = useState([]);
  const [isPetsShowVisible, setIsPetsShowVisible] = useState(false);
  const [currentPet, setCurrentPet] = useState({});

  const handleIndexPets = () => {
    console.log("handleIndexPets");
    axios.get("http://localhost:3000/pets.json").then((response) => {
      console.log(response.data);
      setPets(response.data);
    });
  };

  const handleShowPet = (pet) => {
    console.log("handleShowPet", pet);
    setIsPetsShowVisible(true);
    setCurrentPet(pet);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsPetsShowVisible(false);
  };
  const handleCreatePet = (params, successCallback) => {
    console.log("handleCreatePet", params);
    axios.post("http://localhost:3000/pets.json", params).then((response) => {
      setPets([...pets, response.data]);
      successCallback();
    });
  };

  const handleCreateFoodSchedule = (params, successCallback) => {
    console.log("handleCreateFoodSchedule", params);
    axios.post("http://localhost:3000/food_schedules.json", params).then((response) => {
      const updatedFoodSchedules = [...currentPet["food_schedules"], response.data];
      setCurrentPet({ ...currentPet, food_schedules: updatedFoodSchedules });
      setPets(
        pets.map((pet) => {
          if (pet.id === currentPet.id) {
            pet.food_schedules = updatedFoodSchedules;
          }
          return pet;
        })
      );
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

      <PetsIndex pets={pets} onShowPet={handleShowPet} />
      <Modal show={isPetsShowVisible} onClose={handleClose}>
        <PetsShow pet={currentPet} onCreateFoodSchedule={handleCreateFoodSchedule} />
      </Modal>
      <h1>Welcome to React!</h1>
    </div>
  );
}
