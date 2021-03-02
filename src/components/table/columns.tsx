import _ from 'lodash';
import moment from 'moment';
import { Column, ColumnProps } from 'primereact/column';
import React, { CSSProperties } from 'react';
import HrefButton from 'src/components/Buttons/HrefButton';
import { DATE_FORMAT, DATE_TIME_FORMAT } from 'src/utils/date';
import useUsuario from 'src/_redux/hooks/useUsuario';
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
  customButtons,
  permisoEdit,
  permisoDetail,
  style = {},
  header = 'Opciones',
  columnProps = {},
} = {}) => {
  const { hasPerm } = useUsuario();

  const disabledButton = (disabled, permiso) => {
    if (disabled) return true;

    return permiso && !hasPerm(permiso);
  };

  const body = (rowData: any) => (
    <div className="d-inline-flex justify-content-around w-100">
      {editPath && (
        <HrefButton
          href={editPath(rowData)}
          icon="pi pi-pencil"
          type="button"
          className="p-button-sm"
          disabled={permisoEdit && !hasPerm(permisoEdit)}
        />
      )}

      {detailPath && (
        <HrefButton
          href={detailPath(rowData)}
          icon="pi pi-info-circle"
          type="button"
          className="p-button-warning p-button-sm"
          disabled={permisoDetail && !hasPerm(permisoDetail)}
        />
      )}

      {editButton && (
        <HrefButton
          icon="pi pi-pencil"
          className="p-button-sm"
          type="button"
          onClick={() => editButton?.onClick?.(rowData)}
          permiso={editButton?.permiso}
          disabled={editButton?.isDisabled?.(rowData)}
        />
      )}
      {detailButton && (
        <HrefButton
          icon="pi pi-info-circle"
          className="p-button-warning p-button-sm"
          type="button"
          {...{ ...detailButton, isDisabled: undefined }}
          onClick={(evt) => detailButton?.onClick?.(rowData, { evt })}
          permiso={detailButton?.permiso}
          disabled={detailButton?.isDisabled?.(rowData)}
        />
      )}
      {deleteButton && (
        <HrefButton
          icon="pi pi-trash"
          className="p-button-danger p-button-sm"
          type="button"
          {...{ ...deleteButton, isDisabled: undefined }}
          onClick={(evt) => deleteButton?.onClick?.(rowData, { evt })}
          disabled={deleteButton?.isDisabled?.(rowData)}
          permiso={deleteButton?.permiso}
        />
      )}

      {customButtons &&
        customButtons?.map((item, key) => (
          <HrefButton
            key={`custom-button-${key}`}
            {...item}
            onClick={(evt) => {
              console.log(rowData);
              item?.onClick?.(rowData, { evt });
            }}
            permiso={item?.permiso}
          />
        ))}

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
