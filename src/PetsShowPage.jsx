import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FoodSchedulesNew } from "./FoodSchedulesNew";

export function PetsShowPage(props) {
  const [pet, setPet] = useState({});
  const params = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
  };

  const handleShowPet = () => {
    axios.get(`http://localhost:3000/pets/${params.id}.json`).then((response) => {
      setPet(response.data);
    });
  };

  useEffect(handleShowPet, []);

  return (
    <div>
      <div>
        <div className="card mb-3" key={pet.id}>
          <p>pet id{pet.id}</p>
          <img src={pet.image_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">Pet information</p>
            <h5 className={"card-title" + "fs-1"}>{pet.name}</h5>
            <p className="card-text">Born: {pet.birthday}</p>
            <p className="card-text">Breed:{pet.classification}</p>
            <p className="card-text">Species: {pet.animal_type}</p>
            <p className="card-text">Food Schedule: </p>
            {pet.food_schedules?.map((item) => (
              <div key={item.id}>
                <p className="card-text">{item.food}</p>
                <p className="card-text">{item.frequency}</p>
                <p className="card-text">{item.start_time}</p>
              </div>
            ))}
            <FoodSchedulesNew onCreateFoodSchedule={props.onCreateFoodSchedule} pet={pet} />
            {/* <small className="text-muted">User_id: {props.pet.user_id}</small> */}
          </div>
        </div>
      </div>
      <Link to="/" className="btn btn-primary mx-2 my-3">
        Link back to home page
      </Link>

      {/* <button onClick={props.onEditRecipe}>Edit Recipe</button>*/}
      {/* <PostsDestroy onDestroyPost={props.onDestroyPost} post={props.post} /> */}
    </div>
  );
}
