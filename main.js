import ToyReact, { Component } from "./ToyReact";

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>hello</span>
        <span>world</span>
        <span>!</span>
        <hr />
        {true}

        <div>{this.children}</div>
      </div>
    );
  }
}

// 如果MyComponent上没有children这个东西，那么是不能在中间添加内容的
const a = (
  <MyComponent name="tony">
    <div>
      <p>123</p>
      <ul>
        <li>11</li>
        <li>22</li>
      </ul>
    </div>
  </MyComponent>
);

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
