import { get } from 'lodash';
import { MutableRefObject, useRef } from 'react';

export type useCustomRefType<T> = {
  ref: MutableRefObject<T>;
  setRef: CallableFunction | any;
  focusRef: CallableFunction | any;
};

const useCustomRef = <T,>(initialValue): useCustomRefType<T> => {
  const ref = useRef<T>(initialValue);

  const setter = (inputReft) => {
    if (inputReft) ref.current = inputReft;
  };

  const setRef = (pathOrInputReft: string | any = null): void | CallableFunction => {
    if (typeof pathOrInputReft !== 'string') {
      setter(pathOrInputReft);
      return;
    }

    return (inputReft): void | CallableFunction => {
      const filteredRef = get(inputReft, pathOrInputReft, null);
      //   console.log('NO SE HA ENCONTRADO NINGUN REF: ', inputReft);
      setter(filteredRef);
    };
  };
  const focusRef = (pathOrFocus: string | unknown) => {
    if (typeof pathOrFocus !== 'string') {
      //@ts-ignore
      ref.current?.focus();
      return;
    }
    return () => {
      const focus = get(ref, pathOrFocus, null);
      focus?.();
    };
  };
  return { ref, setRef, focusRef };
};

export default useCustomRef;
