let hamMenuIcon = document.getElementById("ham-menu");
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
let scrollTopBtn = document.getElementById("scroll-top");

// SideMenu Toggle
// events => clicking elements, hover over the elements
// addEventListener => addEvent => add a event on the element selected => Listener => function to perform the event
// 1. Kind of the event => click, hover, scroll etc...
// 2. Listener => Function to perform the event

// Function => Some input => process the input => Gives us output
// Ex: ATM machine => insert the card => machine process something => money as output
// functionName(parameter/Arguments)
// addEventListener("eventName", "eventListenerFunction")
// Sidebar Events
hamMenuIcon.addEventListener("click", function () {
  navBar.classList.toggle("active");
  hamMenuIcon.classList.toggle("fa-circle-xmark");
});

// List => 3 => [list-0, list-1, list-2]
// List.forEach(varName)
//                  => Iteration-1 => varName = list-0
//                  => Iteration-2 => varName = list-1
//                  => Iteration-3 => varName = list-2
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    navBar.classList.toggle("active");
    hamMenuIcon.classList.toggle("fa-circle-xmark");
  });
});

// navLinks[0].addEventListener("click", function () {
//   navBar.classList.toggle("active");
//   hamMenuIcon.classList.toggle("fa-circle-xmark");
// });

// navLinks[1].addEventListener("click", function () {
//   navBar.classList.toggle("active");
//   hamMenuIcon.classList.toggle("fa-circle-xmark");
// });

// navLinks[2].addEventListener("click", function () {
//   navBar.classList.toggle("active");
//   hamMenuIcon.classList.toggle("fa-circle-xmark");
// });

// navLinks[3].addEventListener("click", function () {
//   navBar.classList.toggle("active");
//   hamMenuIcon.classList.toggle("fa-circle-xmark");
// });

// navLinks[4].addEventListener("click", function () {
//   navBar.classList.toggle("active");
//   hamMenuIcon.classList.toggle("fa-circle-xmark");
// });

// Event to Scroll to Top
scrollTopBtn.addEventListener("click", function () {
  document.documentElement.scrollTop = 0;
});
