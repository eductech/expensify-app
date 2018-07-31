import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: undefined
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
    //nothing
  }

  handleDeleteOptions = () => {
    this.setState( {options: []} );
  }

  handleCloseModal = () => {
    this.setState( {selectedOption: undefined} );
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({options: prevState.options.filter((option) => optionToRemove !== option)}));
  }

  handlePick = () => {
    const selectedOption = this.state.options[Math.floor(this.state.options.length * Math.random())];

    this.setState({ selectedOption });
  }

  handleAddOption = (option) => {
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
        <div className="container">
          <Action hasOptions={this.state.options.length > 0} pick={this.handlePick}/>
          <div className="widget">
            <Options 
              options={this.state.options} 
              deleteOptions={this.handleDeleteOptions}
              deleteOption={this.handleDeleteOption}
            />
            <AddOption addOption={this.handleAddOption}/>
            <OptionModal 
              closeModal={this.handleCloseModal}
              selectedOption={this.state.selectedOption}
            />
          </div>
        </div>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
};

export default IndecisionApp;
