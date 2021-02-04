import _ from 'lodash';
import React, { useEffect, useState } from 'react';

const ItemDetailTable = ({
  label,
  source,
  default: defaultValue,
  path,
  paths,
  mask,
  defaultValuePath,
  body,
  listen,
}) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    if (body) {
      return setValue(body(source));
    }

    const defaultValueFromPath = _.get(source, defaultValuePath, defaultValue);

    if (paths && paths?.length > 0) {
    }
    const sourceValue = _.get(
      source,
      path,
      defaultValuePath ? defaultValueFromPath : defaultValue,
    );

    if (mask && sourceValue !== defaultValue) {
      setValue(mask.replace('<{value}>', sourceValue));
    } else {
      setValue(sourceValue);
    }
  }, [defaultValue, mask, path, source, listen]);

  return (
    <tr>
      <th style={{ width: '40%', padding: '0.5rem 0.5rem' }}>
        <h5 className="font-weight-bold" style={{ margin: '0 0 0 0' }}>
          {label}
        </h5>
      </th>
      <th style={{ width: '60%', padding: '0.5rem 0.5rem' }}>
        {!body && <p style={{ margin: '0 0 0 0' }}>{value}</p>} {body && value}
      </th>
    </tr>
  );
};

export default ItemDetailTable;
