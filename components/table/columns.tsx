import Link from 'next/link';
import { Column } from 'primereact/column';
import React, { CSSProperties } from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

export const IndexColumn = () => {
  return (
    <Column
      style={{ width: '70px' }}
      header="#"
      headerClassName="text-left text-sm-center"
      body={(rowData, { rowIndex }) => rowIndex + 1}
      bodyClassName="text-left text-sm-center font-weight-bold"
    />
  );
};

export const OptionesColumn: React.FC<{ style: CSSProperties } & any> = ({
  children,
  editPath = (rowData: any): string => '',
  detailPath = (rowData: any): string => '',
  style = {},
  header = 'Opciones',
} = {}) => {
  const bodyColumn = (rowData: any) => (
    <div className="d-inline-flex justify-content-around w-100">
      {editPath && (
        <Link href={editPath(rowData)}>
          <a className="btn btn-sm btn-primary">
            <FiEdit />
          </a>
        </Link>
      )}

      {detailPath && (
        <Link href={detailPath(rowData)}>
          <a className="btn btn-sm btn-warning">
            <FaInfoCircle />
          </a>
        </Link>
      )}
      {children}
    </div>
  );

  return (
    <Column
      header={header}
      style={style}
      className="th__opciones"
      body={bodyColumn}
    />
  );
};

export const BooleanColumn = ({ header, style, ifTrue, ifFalse, ...props }) => {
  const bodyColumn = (rowData) => (rowData[props.field] ? ifTrue : ifFalse);

  return <Column header={header} style={style} body={bodyColumn} {...props} />;
};

export const CounterArrayColumn = ({ header, style, ...props }) => {
  const bodyColumn = (rowData) => {
    return rowData[props.field].length;
  };

  return <Column header={header} style={style} body={bodyColumn} {...props} />;
};
