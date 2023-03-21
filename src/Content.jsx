import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { PetsIndex } from "./PetsIndex";

export function Content() {
  return (
    <div>
      <Signup />
      <Login />
      <LogoutLink />
      <h1>Welcome to React!</h1>
    </div>
  );
}
