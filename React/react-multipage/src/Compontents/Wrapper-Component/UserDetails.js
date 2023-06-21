import SingleUser from "./SingleUser";

const UserDetails = ({ otherProps, id, users }) => {
  //   console.log(otherProps);
  //   console.log(id);
  //   console.log(users);
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
      <SingleUser id={id} users={users} />
      <hr />
    </div>
  );
};

export default UserDetails;
