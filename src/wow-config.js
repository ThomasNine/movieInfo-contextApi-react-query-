// wow-config.js
import WOW from "wowjs";

const wow = new WOW({
  boxClass: "animate__animated", // Change the default animation class
  offset: 50, // Adjust scroll offset for animations to trigger
  scrollContainer: null, // Specify a custom scroll container
  // ...other options
});

export default wow;
