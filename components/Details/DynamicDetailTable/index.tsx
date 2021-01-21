import React from 'react';
import ItemDetailTable from './ItemDetailTable';

const DynamicDetailTable = ({ source = {}, diccionario = [] }) => {
  return (
    <table
      className="table table-bordered table-responsive-sm"
      style={{ margin: '0 0 0 0' }}
    >
      <tbody>
        {diccionario.map((item, index) => (
          <ItemDetailTable {...item} source={source} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default DynamicDetailTable;
