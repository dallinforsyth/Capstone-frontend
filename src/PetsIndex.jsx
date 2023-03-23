export function PetsIndex(props) {
  return (
    <div>
      <h1>All pets</h1>
      {props.pets.map((pet) => (
        <div key={pet.id}>
          <h2>{pet.name}</h2>
          <img src={pet.image_url} />
          <p>Birthday: {pet.birthday}</p>
          <p>User_id: {pet.user_id}</p>
          <p>Breed: {pet.breed.classification}</p>
          <p>Species: {pet.breed.animal_type}</p>

          <button onClick={() => props.onShowPet(pet)}>More info</button>
        </div>
      ))}
    </div>
  );
}
