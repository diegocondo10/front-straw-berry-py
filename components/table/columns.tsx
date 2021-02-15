import HrefButton from '@components/Buttons/HrefButton';
import { Column, ColumnProps } from 'primereact/column';
import React, { CSSProperties } from 'react';

export const IndexColumn = () => {
  return (
    <Column
      style={{ width: '80px' }}
      header="#"
      headerClassName="text-left text-sm-center"
      body={(rowData, { rowIndex }) => rowIndex + 1}
      bodyClassName="text-left text-sm-center font-weight-bold"
    />
  );
};

export const OptionesColumn: React.FC<
  {
    style: CSSProperties;
    columnProps: ColumnProps;
  } & any
> = ({
  children,
  editPath = (rowData: any): string => '',
  detailPath = (rowData: any): string => '',
  style = {},
  header = 'Opciones',
  columnProps = {},
} = {}) => {
  const body = (rowData: any) => (
    <div className="d-inline-flex justify-content-around w-100">
      {editPath && (
        <HrefButton
          href={editPath(rowData)}
          icon="pi pi-pencil"
          className="p-button-sm"
        />
      )}

      {detailPath && (
        <HrefButton
          href={detailPath(rowData)}
          icon="pi pi-info-circle"
          className="p-button-warning p-button-sm"
        />
      )}
      {children}
    </div>
  );

  return (
    <Column
      header={header}
      style={style}
      className="th__opciones"
      body={body}
      {...columnProps}
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
