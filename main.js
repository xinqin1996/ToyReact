import ToyReact, { Component } from "./ToyReact";

class Square extends Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          alert(this.props.value);
        }}
      >
        {this.props.value}
      </button>
    );
  }
}
class Board extends Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// 如果MyComponent上没有children这个东西，那么是不能在中间添加内容的
const board = <Board />;

ToyReact.render(board, document.getElementById("root"));

// const a = (
//   <div name="tony">
//     <span>hello</span>
//     <span>world</span>
//     <span>!</span>
//   </div>
// );

// console.log(a);
// document.getElementById("root").appendChild(a);
