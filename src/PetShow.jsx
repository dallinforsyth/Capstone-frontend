export function PetsShow(props) {
  return (
    <div>
      <h1>Pet information</h1>
      <p>Name: {props.pet.name}</p>
      <p>Birthday: {props.pet.birthday}</p>
      <img src={props.pet.image_url} />
      <p>User_id: {props.pet.user_id}</p>
      <p>Breed: {props.pet.breed.classification}</p>
      <p>Species: {props.pet.breed.animal_type}</p>
    </div>
  );
}
