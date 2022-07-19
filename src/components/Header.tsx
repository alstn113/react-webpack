import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/post"}>Post</Link>
      <Link to={"/counter"}>Counter</Link>
    </div>
  );
};

export default Header;
