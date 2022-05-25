import React from "react";
import { toast } from "react-toastify";

const ShowUsers = ({ user, refetch }) => {
  const { email, role } = user;
  const makeAdmin = () => {
    console.log("make admin");
  };
  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <button onClick={makeAdmin} class="btn btn-xs">
            Make Admin
          </button>
        )}
      </td>
    </tr>
  );
};

export default ShowUsers;
