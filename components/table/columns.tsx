import HrefButton from '@components/Buttons/HrefButton';
import { DATE_FORMAT, DATE_TIME_FORMAT } from '@utils/date';
import _ from 'lodash';
import moment from 'moment';
import { Button } from 'primereact/button';
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
  editPath,
  detailPath,
  editButton,
  detailButton,
  deleteButton,
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
          type="button"
          className="p-button-sm"
        />
      )}

      {detailPath && (
        <HrefButton
          href={detailPath(rowData)}
          icon="pi pi-info-circle"
          type="button"
          className="p-button-warning p-button-sm"
        />
      )}

      {editButton && (
        <Button
          icon="pi pi-pencil"
          className="p-button-sm"
          type="button"
          onClick={() => editButton?.onClick?.(rowData)}
          disabled={editButton?.isDisabled?.(rowData) || false}
        />
      )}
      {detailButton && (
        <Button
          icon="pi pi-info-circle"
          className="p-button-warning p-button-sm"
          type="button"
          {...detailButton}
          onClick={() => detailButton?.onClick?.(rowData)}
          disabled={detailButton?.isDisabled?.(rowData) || false}
        />
      )}
      {deleteButton && (
        <Button
          icon="pi pi-trash"
          className="p-button-danger p-button-sm"
          type="button"
          {...deleteButton}
          onClick={() => deleteButton?.onClick?.(rowData)}
          disabled={deleteButton?.isDisabled?.(rowData) || false}
        />
      )}

      {children && children(rowData)}
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

export type DateColumnProps = {
  path: string;
  format?: string;
} & ColumnProps;

export const DateColumn: React.FC<DateColumnProps> = (props) => {
  const { path, format = DATE_FORMAT, ...rest } = props;

  const body = (rowData) => {
    try {
      return moment(_.get(rowData, path, '')).format(format);
    } catch (error) {
      return null;
    }
  };

  return <Column {...rest} body={body} />;
};

export const DateTimeColumn: React.FC<DateColumnProps> = (props) => {
  const { path, format = DATE_TIME_FORMAT, ...rest } = props;

  const body = (rowData) => {
    try {
      return moment(_.get(rowData, path, '')).format(format);
    } catch (error) {
      return null;
    }
  };

  return <Column {...rest} body={body} />;
};
