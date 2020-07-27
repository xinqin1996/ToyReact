// //  没有render方法的，这是一个真实的dom元素
// class Wrapper {
//   // 我们这边要让wrapper的行为和createElement之前创建真是dom的操作一直
//   constructor(type) {
//     this.root = document.createElement(type);
//   }
//   setAttribute(name, value) {
//     this.root.setAttribute(name, value);
//   }
//   //   这里不是真的child，而是一个虚拟的child
//   appendChild(vchild) {
//     vchild.mountTo(this.root);
//   }
// }

// class ElementWrapper {
//   // 我们这边要让wrapper的行为和createElement之前创建真是dom的操作一直
//   constructor(type) {
//     this.root = document.createElement(type);
//   }
//   setAttribute(name, value) {
//     this.root.setAttribute(name, value);
//   }
//   //   这里不是真的child，而是一个虚拟的child
//   appendChild(vchild) {
//     vchild.mountTo(this.root);
//   }
//   mountTo(parent) {
//     parent.append(this.root);
//   }
// }

// class TextWrapper {
//   // 我们这边要让wrapper的行为和createElement之前创建真是dom的操作一直
//   constructor(content) {
//     this.root = document.createElement(content);
//   }

//   mountTo(parent) {
//     parent.append(this.root);
//   }
// }
let ToyReact = {
  createElement: function (type, attributes, ...children) {
    let element;
    if (typeof type === "string") {
      //   element = new ElementWrapper(type);
      element = document.createElement(type);
    } else {
      element = new type();
    }
    for (const key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        element.setAttribute(key, attributes[key]);
      }
    }
    for (const child of children) {
      if (typeof child === "string") {
        // child = new TextWrapper(child);
        child = document.createTextNode(child);
      }
      element.appendChild(child);
    }
    // 返回一个实dom
    return element;
  },
  render: function (vdom, element) {
    //   在vdom中去做一个添加操作
    vdom.mountTo(element);
    //   如果这边是一个vdom的实例，这边可能不太合适？
    element.appendChild(vdom);
  },
};
export default ToyReact;
