import {useParams, useSearchParams} from 'react-router-dom';
import React from 'react';

export default function ReactRouterHooks(): React.JSX.Element {
  const {lastPath} = useParams();
  const [searchParams] = useSearchParams();

  return (
    <section>
      <h2>React Router Hooks</h2>
      <p>bar: {searchParams.get('bar')}</p>
      <p>lastPath: {lastPath}</p>
    </section>
  );
}
