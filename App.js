import React from "react";
import  ReactDOM  from "react-dom/client";

const heading = React.createElement("h1", {id: "heading", className:"my-head" }, "nevr give up")

console.log(heading)
const jsxheading = (<h1>this is jsx heading</h1>);
console.log(jsxheading)

const Comp1 = ()=>{
    return <h1>this comp1</h1>
}
const numb = 1000
const HeadingComponent = ()=>{
    return(
        <>
      <h2>{numb}</h2>  
        <Comp1/>
        <h1 id= "heading"> never give up</h1>
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComponent/>);
