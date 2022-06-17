import { useState } from "react";
import { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { getUsers } from "../../utils/api";
import "./Users.css";
const Users = () => {
  const [selectUser, setSelectUser] = useState([]);
  const { setLoggedUser } = useContext(UserContext);
  useEffect(() => {
    getUsers().then((usersFromApi) => setSelectUser(usersFromApi));
  }, []);

  return (
    <div className="user-container">
      <h2>Select User</h2>
      <ul>
        {selectUser.map((user) => (
          <li key={user.username} className="user-info">
            <div className="image-container">
              <img src={user.avatar_url} alt={user.username} />
            </div>
            <h5>Username: {user.username}</h5>
            <h5>Name: {user.name}</h5>
            <button
              onClick={() => {
                setLoggedUser(user);
              }}
            >
              click
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
