// import { useLoggedIn } from '../../utils/use-logged-in';
import { Navigate } from "react-router-dom";

const AuthGuard = ({ children }) => {
  const name = prompt("Your Name:");
  const isLogged = localStorage.getItem(name);
  if (name) {
    // console.log(name);
    return <>{children}</>;
  }

  return <Navigate to="/" />;
};

export default AuthGuard;
