import React from "react";
import ReactDOM from "react-dom/client";


const heading = React.createElement("h1",{key:"1"},"Hello");
console.log(heading);
const heading2 = React.createElement("h1",{key:"2"},"Hello2");

const div = React.createElement("div",{id:"container"},[heading,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);
