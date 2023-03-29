import axios from "axios";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

export function FoodSchedulesNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    console.log(props.pet.id);
    params.append("pet_id", props.pet.id);
    props.onCreateFoodSchedule(params, () => event.target.reset());
  };

  return (
    <div>
      <p></p>
      <h4>New Food Schedule</h4>
      <form onSubmit={handleSubmit}>
        <div>
          Food: <input name="food" type="text" />
        </div>
        <div>
          Frequency: <input name="frequency" type="text" />
        </div>
        <div>
          Time of the day: <input name="start_time" type="text" />
        </div>
        <button type="submit">Create Food Schedule</button>
      </form>
    </div>
  );
}
