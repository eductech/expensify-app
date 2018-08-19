import React from "react";
import { startLogin } from "../actions/auth";
import { connect } from 'react-redux';

export const LoginPage = (props) => {
  return (
    <div>
      <button onClick={props.startLogin}>login</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin())
  };
};

export default connect(undefined, mapDispatchToProps)(LoginPage);