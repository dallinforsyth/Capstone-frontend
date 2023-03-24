import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav>
        <a href="/">Home</a> | <a href="/logout">logout</a> | <a href="/signup">Signup</a> | |{" "}
        <a href="/login">login</a>
      </nav>
    </header>
  );
}
