// name
let username = document.querySelector("#username");
// age
let age = document.querySelector("#userAge");
// city
let city = document.querySelector("#userCity");
// submit
let submitBtn = document.querySelector("#submit");
// update
let updateBtn = document.querySelector("#update");
// delete
let deleteBtn = document.querySelector("#delete");
// allUsers
let allUsers = document.querySelector("#all-users");

// Create User
submitBtn.addEventListener("click", (e) => {
  try {
    e.preventDefault();
    //   console.log(userID.value);
    //   console.log(username.value);
    //   console.log(age.value);
    //   console.log(city.value);
    fetch("http://localhost:5000/api/v1/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username.value,
        age: age.value,
        city: city.value,
      }),
    });
  } catch (error) {
    console.log(error);
  }
});

// getAllUsers
allUsers.addEventListener("click", (e) => {
  // try {
  //   e.preventDefault();
  //   const res = await fetch("/api/v1/users");
  //   const users = await res.json();
  //   console.log(users);
  // } catch (error) {
  //   console.log(error);
  // }
  e.preventDefault();
  fetch("/api/v1/users")
    .then((res) => res.json())
    .then((users) => console.log(users.data))
    .catch((err) => console.log(err));
});

// Update User
updateBtn.addEventListener("click", (e) => {
  try {
    e.preventDefault();
    fetch(`/api/v1/users/${userID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username.value,
        age: age.value,
        city: city.value,
      }),
    });
  } catch (error) {
    console.log(error);
  }
});

// Delete User
deleteBtn.addEventListener("click", (e) => {
  try {
    e.preventDefault();
    fetch(`/api/v1/users/${userID}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
});
