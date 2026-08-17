/**
 * @file Paragraph.tsx
 */

import React, {useContext} from 'react';
import {Foo} from './FooProvider';

export default function ParagraphForUseContext(): React.JSX.Element {
  const {count} = useContext(Foo);
  return <p>click count: {count}</p>;
}
