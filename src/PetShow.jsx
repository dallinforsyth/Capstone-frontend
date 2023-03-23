import { useState } from "react";
import axios from "axios";
import { FoodSchedulesNew } from "./FoodSchedulesNew";

export function PetsShow(props) {
  return (
    <div>
      <div className="card mb-3" key={props.pet.id}>
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
        </div>
      </div>
    </div>
  );
}

{
  /* <h1>Pet information</h1> */
}
{
  /* <p>Name: {props.pet.name}</p> */
}
{
  /* <p>Birthday: {props.pet.birthday}</p> */
}
{
  /* <img src={props.pet.image_url} /> */
}
{
  /* <p>User_id: {props.pet.user_id}</p> */
}
{
  /* <p>Breed: {props.pet.breed.classNameification}</p> */
}
{
  /* <p>Species: {props.pet.breed.animal_type}</p> */
}
{
  /* <p>Food Schedule: {props.pet.food_schedule}</p> */
}

// <div className="card mb-3" style={{ maxwidth: 540 }}>
//   <div className="row g-0">
//     <div className="col-md-4">
//       <img src={props.pet.image_url} className="img-fluid rounded-start" alt="..." />
//     </div>
//     <div className="col-md-8">
//       <div className="card-body">
//         <h5 className="card-title">Pet information</h5>
//         <h6 className="card-title">{props.pet.name}</h6>
//         <ul className="list-group list-group-flush">
//           <li className="list-group-item">Born: {props.pet.birthday}</li>
//           <li className="list-group-item">Breed:{props.pet.breed.classNameification}</li>
//           <li className="list-group-item">Species: {props.pet.breed.animal_type}</li>
//           <li className="list-group-item">
//             <p>Food Schedule: {props.pet.food_schedule}</p>
//           </li>
//         </ul>
//         <p className="card-text">
//           <small className="text-muted">User_id: {props.pet.user_id}</small>
//         </p>
//       </div>
//     </div>
//   </div>
// </div>;
