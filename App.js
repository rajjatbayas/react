const heading = React.createElement(
  "h1",
  { id: "heading", "data-id": "test" },
  "Hello World from React!"
);
const heading2 = React.createElement(
  "h1",
  { id: "heading2", "data-id": "test" },
  ["Hello World from React!", "Hello World from React! 2"]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root.render(heading);
root2.render(heading2);
console.log(heading);
