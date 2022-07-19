import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <div>NOT FOUND</div>
      <div>
        <Link to={"/"}>GO HOME</Link>
      </div>
    </div>
  );
};

export default NotFound;
