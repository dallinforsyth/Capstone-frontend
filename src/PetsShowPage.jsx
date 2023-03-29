import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { AipShow } from "./AipShow";
import { FoodSchedulesNew } from "./FoodSchedulesNew";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

export function PetsShowPage(props) {
  const hypo = "";
  const [pet, setPet] = useState({});
  const params = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
  };

  // const handleHypo = () => {
  //   if (pet.breed?.hypoallergenic === 0) {
  //     hypo = "No";
  //   } else {
  //     hypo = "Yes";
  //   }
  // };

  const handleCreateFoodSchedule = (params, successCallback) => {
    console.log("handleCreateFoodSchedule", params);
    axios.post("http://localhost:3000/food_schedules.json", params).then((response) => {
      // <p>{params.pet?.food_schedules}</p>;
      const updatedFoodSchedules = [...pet["food_schedules"], response.data];
      setPet({ ...pet, food_schedules: updatedFoodSchedules });
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

  const handleShowPet = () => {
    axios.get(`http://localhost:3000/pets/${params.id}.json`).then((response) => {
      setPet(response.data);
    });
  };

  const handleClick = () => {
    props.onDestroyFoodSchedule(props.foodschedule);
  };

  useEffect(handleShowPet, []);

  return (
    <div>
      <div>
        <div key={pet.id}>
          <img src={pet.image_url} className="card-img-top" alt="..." style={{ maxHeight: 300, maxWidth: 300 }} />
          <div className="card-body">
            <p className="card-text">Pet information</p>
            <h2 className={"card-title" + "fs-1"}>{pet.name}</h2>
            <p className="card-text">Born: {pet.birthday}</p>
            <p className="card-text">Breed: {pet.breed?.classification}</p>
            {/* <p className="card-text">Species: {pet.breed?.animal_type}</p> */}
            {/* <AipShow /> */}
            <Accordion defaultActiveKey="0" flush>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Breed information</Accordion.Header>
                <Accordion.Body>
                  <div>
                    <p>Origin: {pet.breed?.origin}</p>
                    <p>Description: {pet.breed?.description}</p>
                    <p>Temperament: {pet.breed?.temperament}</p>
                    <p>Life Span: {pet.breed?.life_span} years</p>
                    <p></p>Hypoallergenic: {pet.breed?.hypoallergenic}
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1"></Accordion.Item>
            </Accordion>

            <p className="card-text">Food Schedule: </p>
            {pet.food_schedules?.map((item) => (
              <div key={item.id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    {/* <Card.Title>Card Title</Card.Title> */}
                    <Card.Subtitle className="mb-2 text-muted">Feeding Schedule</Card.Subtitle>
                    <Card.Text>
                      <p className="card-text">Food: {item.food}</p>
                      <p className="card-text">Frequency: {item.frequency}</p>
                      <p className="card-text"> Time: {item.start_time}</p>
                    </Card.Text>
                    {/* <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link> */}
                  </Card.Body>
                </Card>
                <button onClick={handleClick}>Destroy Food Schedule</button>
              </div>
            ))}
            <FoodSchedulesNew onCreateFoodSchedule={handleCreateFoodSchedule} pet={pet} />
            {/* <small className="text-muted">User_id: {props.pet.user_id}</small> */}
          </div>
        </div>
      </div>
      <Link to="/" className="btn btn-primary mx-2 my-3">
        Home
      </Link>

      {/* <button onClick={props.onEditRecipe}>Edit Recipe</button>*/}
      {/* <PostsDestroy onDestroyPost={props.onDestroyPost} post={props.post} /> */}
    </div>
  );
}
