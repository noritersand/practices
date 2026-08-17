/**
 * @file Button.tsx
 */

import React, {useContext, ReactNode} from 'react';
import {Foo} from './FooProvider';

export default function ButtonForUseContext({children}: {children: ReactNode}): React.JSX.Element {
  const {increment} = useContext(Foo);
  return (
    <button type="button" onClick={increment}>
      {children}
    </button>
  );
}
