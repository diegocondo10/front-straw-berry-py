import Link from "next/link";
import { Column } from "primereact/column";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

export const IndexColumn = () => {
  return (
    <Column
      style={{ width: "70px" }}
      header='#'
      body={(rowData, { rowIndex }) => {
        return rowIndex + 1;
      }}
    />
  );
};

export const OptionesColumn = ({
  editPath,
  detailPath,
  header = "Opciones",
} = {}) => {
  const bodyColumn = (rowData) => (
    <div className='d-inline-flex justify-content-around w-100'>
      {editPath && (
        <Link href={editPath(rowData)}>
          <a className='btn btn-sm btn-primary'>
            <FiEdit />
          </a>
        </Link>
      )}

      {detailPath && (
        <Link href={detailPath(rowData)}>
          <a className='btn btn-sm btn-danger'>
            <AiFillDelete />
          </a>
        </Link>
      )}
    </div>
  );

  return <Column header={header} className='th__opciones' body={bodyColumn} />;
};

export const BooleanColumn = ({ header, style, ifTrue, ifFalse, ...props }) => {
  const bodyColumn = (rowData) => {
    if (rowData[props.field]) {
      return ifTrue;
    }
    return ifFalse;
  };

  return <Column header={header} style={style} body={bodyColumn} {...props} />;
};

export const CounterArrayColumn = ({ header, style, ...props }) => {
  const bodyColumn = (rowData) => {
    return rowData[props.field].length;
  };

  return <Column header={header} style={style} body={bodyColumn} {...props} />;
};
