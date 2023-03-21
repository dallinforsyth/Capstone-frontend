import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { PetsIndex } from "./PetsIndex";
import { Axios } from "axios";

export function Content() {
  const pets = [
    {
      id: 1,
      name: "Ace",
      birthday: "02/14/2019",
      image_url: "https://i.pinimg.com/originals/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg",
      user_id: 1,
      breed_id: 1,
    },
  ];

  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <PetsIndex pets={pets} />
      <h1>Welcome to React!</h1>
    </div>
  );
}
