import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <div className="p-3 rounded-full hover:bg-gray-200 w-fit cursor-pointer">
        <img src="/logo.png" alt="logo" className="size-6" />
      </div>
    </Link>
  );
}
