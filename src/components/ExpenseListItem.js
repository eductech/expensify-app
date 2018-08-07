import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, createdAt, amount}) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>Edit</Link>
      <h3>{description}</h3>
      <p>{amount} - {createdAt}</p>
    </div>
  );
};

export default ExpenseListItem;