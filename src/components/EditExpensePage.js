import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);

  return (
    <div>
      this is my edit. I'm want to change # {props.match.params.id} 
    </div>
  );
};

export default EditExpensePage;