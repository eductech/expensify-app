import React from 'react';
import { Link } from 'react-router-dom';
import moment from "moment";

const ExpenseListItem = ({id, description, createdAt, amount}) => {
  return (
    <div>
      <Link to={`/edit/${id}`}>Edit</Link>
      <h3>{description}</h3>
      <p>
        {amount} - {moment(createdAt).format('MMMM Do, YYYY')}
      </p>
    </div>
  );
};

export default ExpenseListItem;