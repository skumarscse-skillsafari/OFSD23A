import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  const [user, setUser] = useState({});
  const { userID } = useParams();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  console.log(user);
  return (
    <div>
      <h2>Single User Component</h2>
    </div>
  );
};

export default SingleUser;
