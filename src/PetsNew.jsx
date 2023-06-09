import { useState } from "react";

export function PetsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePet(params, () => event.target.reset());

    const [searchFilter, setSearchFilter] = useState("");
  };

  return (
    <div>
      <h1>New Pet</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Birthday: <input name="birthday" type="text" />
        </div>
        <div>
          Image_url: <input name="image_url" type="text" />
        </div>
        <div>
          User_id: <input name="user_id" type="text" />
        </div>
        <div>
          {/* {props.breed
    .filter((breed) => breed.name.toLowerCase().includes(searchFilter.toLowerCase()))
    .map((breed) => { */}
          Breed_id: <input name="breed_id" type="text" />
        </div>
        <button type="submit">Create Pet</button>
      </form>
    </div>
  );
}
