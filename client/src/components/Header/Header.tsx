import { Link } from "react-router-dom";
import Logo from "../Logo";
import SearchBar from "../SearchBar";

export default function Header() {
  return (
    <header className="flex justify-between items-center border py-4 px-4">
      <Logo />
      <form className="w-2/3">
        <SearchBar />
      </form>
      <div className="flex gap-2">
        <Link to={"/sign-in"}>
          <button className="border px-3 py-2 rounded-full">Log in</button>
        </Link>
        <Link to={"/sign-up"}>
          <button className="border px-3 py-2 rounded-full">Sign up</button>
        </Link>
      </div>
    </header>
  );
}
