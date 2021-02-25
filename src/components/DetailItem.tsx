import React from 'react';

const DetailItem = ({ label, value }) => {
  return (
    <li>
      <strong>{label} </strong>
      {value}
    </li>
  );
};

export default DetailItem;
