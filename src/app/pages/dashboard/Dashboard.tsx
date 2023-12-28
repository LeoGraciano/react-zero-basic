import { Link } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="">
      <p>Dashboard</p>
      <Link to="/login">Login</Link>
    </div>
  );
};
