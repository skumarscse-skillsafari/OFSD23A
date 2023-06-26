import SingleUser from "./SingleUser";
import { Link } from "react-router-dom";
import { useState } from "react";

const UserDetails = ({ otherProps, id, users }) => {
  //   console.log(otherProps);
  //   console.log(id);
  // console.log(users);
  const [display, setDisplay] = useState(false);
  const {
    phone,
    website,
    address: {
      city,
      street,
      suite,
      zipcode,
      geo: { lat, lng },
    },
    company: { name, cathchPhrase, bs },
  } = otherProps;
  return (
    <div>
      <h2>UserDetails Component</h2>
      <p>Phone Number: {phone}</p>
      <p>Website: {website}</p>
      <p>Company name: {name}</p>
      <Link to={`/users/${id}`}>More info...</Link>
      <hr />
    </div>
  );
};

export default UserDetails;
