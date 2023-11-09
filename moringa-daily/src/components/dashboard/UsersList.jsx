import { useEffect, useState } from "react";
// import React {useEffect,useState} from "react";
import axios from "axios";
const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const deleteUser = (userId) => {
    axios
      .get(`http://127.0.0.1:5000/users/unapprove/${userId}`)
      .then((response) => {
        window.location.reload();
        console.log(`User with ID ${userId} deleted.`);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const approveUser = (userId) => {
    // You can use axios or any other method to send the request
    axios
      .get(`http://localhost:5000/users/approve/${userId}`)
      .then((response) => {
        // Handle the success of user approval
        console.log(`User with ID ${userId} approved.`);
        // You can also update the 'users' state to reflect the updated list
        // For example, fetch the users list again after approval
        window.location.reload();
      })
      .catch((error) => {
        console.error("Error approving user:", error);
      });
  };

  return (
    <div className="text-black shadow-sm p-4 mx-2 mt-4">
      <div className="flex items-center gap-3 my-3">
        <div className="w-4 h-4 rounded-full bg-red-400 flex justify-center items-center"></div>
        <h6 className="text-red-400 my-auto">Approved Users</h6>
      </div>

      <ul>
        {users.map(
          (user) =>
            user.username.includes("+") &&
            !user.username.includes("-") && (
              <li key={user.id} className="user-item mb-4 p-2 border ">
                <div>
                  <p className="mb-2 bg-blue">Name: {user.username}</p>
                  <p>Role: {user.email}</p>
                </div>
                <div className="user-buttons mt-2">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                  >
                    Delete
                  </button>
                </div>
              </li>
            )
        )}
      </ul>

      <h1 className="text-red-400">Deleted Users</h1>

      <ul>
        {users.map(
          (user) =>
            user.username.includes("-") && (
              <li key={user.id} className="user-item mb-4 p-4 border">
                <div>
                  <p className="mb-2">Name: {user.username}</p>
                  <p className="mb-2">Email: {user.email}</p>
                  <p>Role: {user.role}</p>
                </div>
                <div className="user-buttons mt-2">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => approveUser(user.id)}
                    className="bg-green-900 text-white px-4 py-2 rounded-md"
                  >
                    Approve
                  </button>
                </div>
              </li>
            )
        )}
      </ul>

      <h1 className="text-green-600">Remaining users</h1>

      <ul>
        {users.map(
          (user) =>
            !user.username.includes("-") && (
              <li key={user.id} className="user-item mb-4 p-4 border">
                <div>
                  <p className="mb-2">Name: {user.username}</p>
                  <p className="mb-2">Email: {user.email}</p>
                  <p>Role: {user.role}</p>
                </div>
                <div className="user-buttons mt-2">
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md mr-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => approveUser(user.id)}
                    className="bg-green-900 text-white px-4 py-2 rounded-md"
                  >
                    Approve
                  </button>
                </div>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default UsersList;
