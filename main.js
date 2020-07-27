import ToyReact, { Component } from "./ToyReact";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>hello</span>
        <span>world</span>
        <span>!</span>
      </div>
    );
  }
}
const a = <MyComponent name="tony"></MyComponent>;

ToyReact.render(a, document.getElementById("root"));

// const a = (
//   <div name="tony">
//     <span>hello</span>
//     <span>world</span>
//     <span>!</span>
//   </div>
// );

// console.log(a);
// document.getElementById("root").appendChild(a);
