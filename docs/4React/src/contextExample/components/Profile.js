import React, { useContext } from "react";
import UserContext from "../context/User/context";

const Profile = () => {
  const { selectedUser } = useContext(UserContext);

  return (
    <>
      {selectedUser ? (
        <div>
          <img
            src={selectedUser.avatar}
            alt="user selected"
            style={{ width: 180 }}
          />
          <h1>{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
          <h3>email: {selectedUser.email}</h3>
        </div>
      ) : (
        <div>Selecciona un usuario</div>
      )}
    </>
  );
};

export default Profile;
