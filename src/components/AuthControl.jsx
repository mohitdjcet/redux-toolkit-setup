import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../features/auth/authSlice";

function AuthControl() {
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleLogin = () => {
    const userData = { name: "Mohit Kumar", email: "test@gmail.com" };
    dispatch(login(userData));
  };
  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Welcome : {user.name}</h2>
          <p>Email: {user.email} </p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
}
export default AuthControl;
