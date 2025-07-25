import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/users/userSlice";

function UserComponent() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>User List :</h1>
      <ul>
        {
            users.map((user)=>(
                <li key={user.id}>
                    {user.name} - {user.email}
                </li>
            ))
        }
      </ul>
    </div>
  );
}
export default UserComponent;
