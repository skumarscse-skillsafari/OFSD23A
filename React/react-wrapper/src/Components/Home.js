import { useState } from "react";
import EditUser from "./EditUser";
import UserInfo from "./UserInfo";

const Home = () => {
  const [edit, setEdit] = useState(false);
  return (
    <div>
      <h2>Home Component</h2>
      <UserInfo />
      <button onClick={() => setEdit(!edit)}>Edit</button>
      {edit && <EditUser />}
    </div>
  );
};

export default Home;
