//create element takes 3 arugments
//It is an object
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World From React"
);

console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); //resposnible for converting object to h1 tag and putting in div tag
