import React from "react";
import  ReactDOM  from "react-dom/client";


const parent = React.createElement("div", {id: "parent"},[
React.createElement("div",{id: "child"},[
React.createElement("h1",{class: "heading"}, "h1 tag"),
React.createElement("h2",{}, "iam h2 tag")
]),
React.createElement("div",{id: "child1"},[
React.createElement("h1",{}, "iam h1 tag"),
React.createElement("h2",{}, "iam h2 tag")
]),
])
console.log(parent); // object
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
/*
<div id = "parent">
<div id = "child">
  <h1>iam h1 tag</h1>
  <h2>iam h2 tag</h2>
</div>
<div id = "child2">
  <h1>iam h1 tag</h1>
  <h2>iam h2 tag</h2>
</div>
</div>
*/

