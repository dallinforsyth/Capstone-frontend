export function BreedsNew() {
  return (
    <div>
      <h1>New Breed</h1>
      <form>
        <div>
          Animal Type (Cat/Dog/Lizzard): <input name="animal_type" type="text" />
        </div>
        <div>
          Breed: <input name="classification" type="text" />
        </div>
        <button type="submit">Create Breed</button>
      </form>
    </div>
  );
}
