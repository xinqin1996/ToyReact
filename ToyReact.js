class ElementWrapper {
  // 我们这边要让wrapper的行为和createElement之前创建真是dom的操作一直
  constructor(type) {
    this.root = document.createElement(type);
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }
  //   这里不是真的child，而是一个虚拟的child
  appendChild(vchild) {
    vchild.mountTo(this.root);
  }
  mountTo(parent) {
    parent.appendChild(this.root);
  }
}

class TextWrapper {
  // 我们这边要让wrapper的行为和createElement之前创建真是dom的操作一直
  constructor(content) {
    this.root = document.createTextNode(content);
  }

  mountTo(parent) {
    parent.appendChild(this.root);
  }
}

export class Component {
  constructor() {
    this.children = [];
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

  appendChild(vchild) {
    this.children.push(vchild);
  }
}
let ToyReact = {
  createElement: function (type, attributes, ...children) {
    let element;
    if (typeof type === "string") {
      element = new ElementWrapper(type);
      // element = document.createElement(type);
    } else {
      element = new type();
    }
    for (const key in attributes) {
      if (attributes.hasOwnProperty(key)) {
        element.setAttribute(key, attributes[key]);
      }
    }
    // 递归用来出来 类组件的children， 传进来的this.children是数组，需要展开
    let insertChildren = (children) => {
      for (const child of children) {
        if (typeof child === "object" && child instanceof Array) {
          // 递归展开
          insertChildren(child);
          // child = document.createTextNode(child);
        } else {
          //可以处理 {true}这种元素
          if (
            !(child instanceof Component) &&
            !(child instanceof ElementWrapper) &&
            !(child instanceof TextWrapper)
          ) {
            child = String(child);
          }
          if (typeof child === "string") {
            child = new TextWrapper(child);
            // child = document.createTextNode(child);
          }
          element.appendChild(child);
        }
      }
    };
    insertChildren(children);
    // 返回一个实dom
    return element;
  },
  render: function (vdom, element) {
    //   在vdom中去做一个添加操作
    vdom.mountTo(element);
    //   如果这边是一个vdom的实例，这边可能不太合适？
    // console.log(element);
    // element.appendChild(vdom);
  },
};
export default ToyReact;
