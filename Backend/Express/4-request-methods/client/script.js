// id
let userID = document.querySelector("#userID");
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
        id: userID.value,
        name: username.value,
        age: age.value,
        city: city.value,
      }),
    });
  } catch (error) {
    console.log(error);
  }
});

// Update User
updateBtn.addEventListener("click", (e) => {
  try {
    e.preventDefault();
    fetch(`/api/v1/users/${userID.value}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userID.value,
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
    fetch(`/api/v1/users/${userID.value}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
  }
});
