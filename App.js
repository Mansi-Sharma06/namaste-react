/** 
 * creating nested divs in html
 * <div id="parent">
 *     <div id="child">
 *         <h1> i am h1 tag</h1>
 *         <h2> i am h2 tag</h2> // h1,h2 siblings
 *       </div>
 *     <div id="child2">
 *         <h1> i am h1 tag</h1>
 *         <h2> i am h2 tag</h2>
 *       </div>
 * </div>
 * 
 * react element(object) => html(browser understands)
 * */

const parent = React.createElement(
  "div",
  { id: "parent" },
  [React.createElement(
    "div",
      { id: "child" },
      [React.createElement("h1", {}, "i am h1 tag"), React.createElement("h2", {}, "i am h2 tag")
      ]),
     React.createElement(
    "div",
      { id: "child2" },
      [React.createElement("h1", {}, "i am h1 tag"), React.createElement("h2", {}, "i am h2 tag")
      ]) 
    ]);



// const heading = React.createElement("h1", { id: "heading", xyz: "abc" },
//     "Hello World from React!");

// console.log(heading); // return object
    console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);  
root.render(parent);
