class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: this.props.options
    }
  }

  componentDidMount() {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);

    if (options) {
      this.setState({options});
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  componentWillUnmount() {

  }

  handleDeleteOptions() {
    this.setState( {options: []} );
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({options: prevState.options.filter((option) => optionToRemove !== option)}));
  }

  handlePick() {
    alert(this.state.options[Math.floor(this.state.options.length * Math.random())]);
  }

  handleAddOption(option) {
    if (!option) {
      return 'Please enter some value!!!';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Option exists!!!';
    }

    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  }

  render() {
    const subtitle = 'Put your life in the hands of the computer';

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Options 
          options={this.state.options} 
          deleteOptions={this.handleDeleteOptions}
          deleteOption={this.handleDeleteOption}
        />
        <AddOption addOption={this.handleAddOption}/>
        <Action hasOptions={this.state.options.length > 0} pick={this.handlePick}/>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
}

Header.defaultProps = {
  title: 'Indecision'
}

const Action = (props) => {
  return (
    <div>
      <button 
        onClick={props.pick}
        disabled={!props.hasOptions}
      >
        What should I do?
      </button>
    </div>
  )
}

const Options = (props) => {
  return (
    <div>
      <button onClick={props.deleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {
        props.options.map((option) => (
          <Option 
            key={option} 
            optionText={option}
            deleteOption={props.deleteOption}
          />
        ))
      }
    </div>
  );
}

const Option = (props) => {
    return (
      <p>
        {props.optionText}
        <button onClick={(e) => props.deleteOption(props.optionText)}>
          remove
        </button>
      </p>
    );
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    }
  }

  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    const error = this.props.addOption(option);
    this.setState({error});

    if (!error) {
      e.target.elements.option.value = '';
    } 
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
