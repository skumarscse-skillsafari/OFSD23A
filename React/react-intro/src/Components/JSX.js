import users from "./data";
import { username, user, fruits, displayMessage } from "./data";
function JSX() {
  displayMessage();
  return (
    <div className="jsx">
      <p>Username: {username}</p>
      <p>User : {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
      <p>Fruit - 1: {fruits[0]}</p>
      <p>Fruit - 2: {fruits[1]}</p>
      <p>Fruit - 3: {fruits[2]}</p>

      {users.map((user, index) => (
        <div className={`user-${index + 1}`} key={index + 1}>
          <h2>User: {user.name}</h2>
          <p>Age: {user.age}</p>
          <p>City: {user.city}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default JSX;
