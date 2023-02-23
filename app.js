import React from "react";
import ReactDOM  from "react-dom/client";

// const root =  ReactDOM.createRoot(document.getElementById('root'));
// const liElement = React.createElement('li',{},"Apples");
// const ulElement = React.createElement('ul',{},[
// liElement,liElement
// ])
// const container = React.createElement('div',{},[ulElement]);
// root.render(container);
// const container = React.createElement("div",{},[ulElement]);
// const element = React.createElement("h1",{
//     name: "heading"
// },[
//     React.createElement("span",{
//         key:'subheading'
//     },"Sub heading"),
//     React.createElement("span",{
//         key:'Menu1'
//     },"Menu items"),
//     React.createElement("span",{
//         key:'Menu2'
//     },"Menu items"),
//     React.createElement("span",{
//         key:'Menu3'
//     },"Menu items")
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element)
    // --------------------JSX----------------------
//JSX => Java script XML
//Using the React.createElement, if we need to create huge elements is very tough.
//JSX can help us to come out of this problem.

const element = (
    <div>
<h1 id="title" key="heading">Namaste React</h1>
</div>
);
            // Above is the JSX


const root = ReactDOM.createRoot(document.getElementById("root"));
const BoldText =() =>(
    <b>Learn in a smarter way</b>
)

const maliciousData = api.getData()

//Functional component
const HeaderComponent = () => {
    return (
    <div>
    <h1>Namaste React heading</h1>
    <h2>Namaste React sub heading</h2>
    {maliciousData}
    <BoldText/>
    </div>
    );
}

root.render(<HeaderComponent/>)