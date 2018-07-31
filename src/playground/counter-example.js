class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.handleMinus = this.handleMinus.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  handleMinus() {
    console.log('It Works!');
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }

  handlePlus() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }

  handleReset() {
    this.setState((prevState) => {
      return {
        count: 0
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handlePlus}>+1</button>
        <button onClick={this.handleMinus}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//   console.log('addOne');
//   count++;
// };
// const minusOne = () => {
//   console.log('minusOne');
//   count--;
// };
// const reset = () => {
//   console.log('reset');
//   count = 0;
// };
// const templateTwo = (
//   <div>
//     <h1>Count: {count}</h1>
//     <button onClick={addOne}>+1</button>
//     <button onClick={minusOne}>-1</button>
//     <button onClick={reset}>reset</button>
//   </div>
// );

// const appRoot = document.getElementById('app'); 

// ReactDOM.render(templateTwo, appRoot);
