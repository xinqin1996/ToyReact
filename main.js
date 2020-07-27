import ToyReact from "./ToyReact";

class MyComponent {
  render() {
    return <div>cool</div>;
  }
  setAttribute(name, value) {
    this[name] = value;
  }
  mountTo(parent) {
    //   获取vdom
    let vdom = this.render();
    // 把虚拟dom挂在到父亲
    vdom.mountTo(parent);
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
