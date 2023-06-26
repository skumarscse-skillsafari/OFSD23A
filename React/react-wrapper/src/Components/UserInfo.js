import { useEffect, useState } from "react";
import Card from "./Card";
import userDetails from "./data";
const UserInfo = () => {
  useEffect(() => {
    setUser(userDetails);
  });
  const [user, setUser] = useState({});
  return (
    <Card>
      <h2>UserInfo Component</h2>
      <h3>Username: {user.name}</h3>
      <p>User age: {user.age}</p>
      <p>User city: {user.city}</p>
    </Card>
  );
};

export default UserInfo;
