import Card from "./Card";

import userDetails from "./data";
const EditUser = () => {
  return (
    <Card>
      <h2>EditUser Component</h2>
      <form>
        <p>
          <input type="text" placeholder="Enter username" />
        </p>
        <p>
          <input type="number" placeholder="Enter age" />
        </p>
        <p>
          <input type="text" placeholder="Enter city" />
        </p>
        <p>
          <button>Edit</button>
        </p>
      </form>
    </Card>
  );
};

export default EditUser;
