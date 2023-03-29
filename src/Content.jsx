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
import { Routes, Route, Navigate } from "react-router-dom";
import { PetsShowPage } from "./PetsShowPage";
import { useNavigate } from "react-router-dom";
import { AipShow } from "./AipShow";

export function Content() {
  const [pets, setPets] = useState([]);
  const [isPetsShowVisible, setIsPetsShowVisible] = useState(false);
  const [currentPet, setCurrentPet] = useState({});
  const navigate = useNavigate();
  const [foodschedules, setFoodSchedules] = useState([]);

  const handleIndexPets = () => {
    console.log("handleIndexPets");
    axios.get("http://localhost:3000/pets.json").then((response) => {
      console.log(response.data);
      setPets(response.data);
    });
  };

  const handleShowPet = (pet) => {
    console.log("handleShowPet", pet);
    navigate(`/pets/${pet.id}`);
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
      // <p>{params.pet?.food_schedules}</p>;
      const updatedFoodSchedules = [...currentPet["food_schedules"], response.data];
      setCurrentPet({ ...currentPet, food_schedules: updatedFoodSchedules });
      // setPets(
      //   pets.map((pet) => {
      //     if (pet.id === currentPet.id) {
      //       pet.food_schedules = updatedFoodSchedules;
      //     }
      //     return pet;
      //   })
      // );
      successCallback();
    });
  };

  const handleDestroyFoodSchedule = (foodschedule) => {
    console.log("handleDestroyFoodSchedule", foodschedule);
    axios.delete(`http://localhost:3000/food_schedules/${foodschedule.id}.json`).then((response) => {
      setFoodSchedules(foodschedules.filter((p) => p.id !== foodschedule.id));
      handleClose();
    });
  };

  useEffect(handleIndexPets, []);

  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<LogoutLink />} />
        <Route path="/new" element={<PetsNew onCreatePet={handleCreatePet} />} />
        <Route path="//" element={<PetsIndex pets={pets} onShowPet={handleShowPet} />} />
        <Route path="/pets" element={<PetsIndex pets={pets} onShowPet={handleShowPet} />} />
        <Route
          path="/pets/:id"
          element={
            <PetsShowPage
              pet={currentPet}
              onCreateFoodSchedule={handleCreateFoodSchedule}
              onDestroyFoodSchedule={handleDestroyFoodSchedule}
            />
          }
        />
        <Route path="/info" element={<AipShow pet={currentPet} />} />
        {/* <Modal show={isPetsShowVisible} onClose={handleClose}>
          <PetsShow pet={currentPet} onCreateFoodSchedule={handleCreateFoodSchedule} />
        </Modal>
        <h1>Welcome to React!</h1> */}
      </Routes>
    </div>
  );
}
