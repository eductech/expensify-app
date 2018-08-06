import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {props.info}</p>
    </div>
  );
}

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info!!!</p>}
      <WrappedComponent {...props}/>
    </div>
  );
}

const ifAuth = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin ? 
        <WrappedComponent {...props}/> :
        <p>please log in</p> 
      }
    </div>
  );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = ifAuth(Info);

ReactDOM.render(<AuthInfo isAdmin={true} info="hi bitch!!!" />, document.getElementById('app'));