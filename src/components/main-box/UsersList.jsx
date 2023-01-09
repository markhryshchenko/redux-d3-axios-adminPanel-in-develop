import React, { useEffect } from "react";
import { getUsers } from "../../services/services";
import User from "./User";

export default function UsersList() {
  const [usersData, setUsersData] = React.useState([]);
  useEffect(() => {
    async function getUsersData() {
      const users = await getUsers();
      setUsersData(users);
    }
    getUsersData();
  }, []);

  return (
    <table>
      <tbody>
        {usersData.map((item) => (
          <User usersData={item} key={item.id} />
        ))}
      </tbody>
    </table>
  );
}
