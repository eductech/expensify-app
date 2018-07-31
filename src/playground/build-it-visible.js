class ToggleComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visibile: true
    }
  }

  handleToggle() {
    this.setState((prevState) => {
      return {
        visibile: !prevState.visibile
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Toggle Example</h1>
        <button onClick={this.handleToggle}>Toggle</button>
        {this.state.visibile ? <p>Hello! Push the button again to hide me</p> : null}
      </div>
    );
  }
}

ReactDOM.render(<ToggleComponent />, document.getElementById('app'));
