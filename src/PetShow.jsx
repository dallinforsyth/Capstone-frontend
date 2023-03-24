import { useState } from "react";
import axios from "axios";
import { FoodSchedulesNew } from "./FoodSchedulesNew";
import { Link, useParams } from "react-router-dom";
import React from "react";

export function PetsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
  };

  return (
    <div>
      {/* <div className="card mb-3" key={props.pet.id}>
        <img src={props.pet.image_url} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Pet information</p>
          <h5 className={"card-title" + "fs-1"}>{props.pet.name}</h5>
          <p className="card-text">Born: {props.pet.birthday}</p>
          <p className="card-text">Breed:{props.pet.breed.classification}</p>
          <p className="card-text">Species: {props.pet.breed.animal_type}</p>

          <p className="card-text">Food Schedule: </p>
          {props.pet.food_schedules.map((item) => (
            <div key={item.id}>
              <p className="card-text">{item.food}</p>
              <p className="card-text">{item.frequency}</p>
              <p className="card-text">{item.start_time}</p>
            </div>
          ))}
          <FoodSchedulesNew onCreateFoodSchedule={props.onCreateFoodSchedule} pet={props.pet} />
          {/* <small className="text-muted">User_id: {props.pet.user_id}</small> */}
      {/* </div> */}
      {/* </div> */} *
    </div>
  );
}
