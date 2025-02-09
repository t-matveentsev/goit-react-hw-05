import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>Hi, this page does not exist.</h2>
      <Link to={"/"}>Come to Home page</Link>
    </div>
  );
};

export default NotFoundPage;
