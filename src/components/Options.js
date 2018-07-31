import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your options</h3>
      <button onClick={props.deleteOptions} className="button button_link">Remove All</button>
    </div>
    {props.options.length === 0 && <p className="widget__message">Please add an option to get started</p>}
    {
      props.options.map(
        (option, index) => (
          <Option 
            count={index + 1}
            key={option} 
            optionText={option}
            deleteOption={props.deleteOption}
          />
        )
      )
    }
  </div>
);

export default Options;