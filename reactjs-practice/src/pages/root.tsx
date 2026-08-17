import {Link, Outlet, useResolvedPath} from 'react-router-dom';

export default function Root() {
  const {pathname} = useResolvedPath({});
  console.debug('resolvedPath.pathname:', pathname);

  return (
    <>
      <header>
        <h1>React Practice With TypeScript</h1>
      </header>
      <main id="detail">
        <nav>
          <Link to={'/'}>Home</Link>
          <p>ETC.</p>
          <ul>
            <li>
              <Link to={'/etc/scratch-pad1'}>scratch-pad #1</Link>
            </li>
            <li>
              <Link to={'/etc/scratch-pad2'}>scratch-pad #2</Link>
            </li>
            <li>
              <Link to={'/etc/scratch-pad3'}>scratch-pad #3</Link>
            </li>
            <li>
              <Link to={'/etc/waiting-ready-for-child'}>waiting ready for child</Link>
            </li>
            <li>
              <Link to={'/etc/coins'}>Coins</Link>
            </li>
          </ul>
          <p>Custom Hooks</p>
          <ul>
            <li>
              <Link to={'/custom-hooks/use-counter-test'}>useCounter</Link>
            </li>
          </ul>
          <p>React Basic Usages</p>
          <ul>
            <li>
              <Link to={'/hooks/use-state-test1'}>useState() test #1</Link>
            </li>
            <li>
              <Link to={'/hooks/use-state-test2'}>useState() test #2</Link>
            </li>
            <li>
              <Link to={'/hooks/use-state-test3'}>useState() test #3</Link>
            </li>
            <li>
              <Link to={'/hooks/use-state-test4'}>useState() test #4</Link>
            </li>
            <li>
              <Link to={'/hooks/use-state-test5'}>useState() test #5</Link>
            </li>
            <li>
              <Link to={'/hooks/unified-use-state'}>Unified useState</Link>
            </li>
            <li>
              <Link to={'/tags/input-checkbox'}>input-checkbox</Link>
            </li>
            <li>
              <Link to={'/props/props-test'}>props</Link>
            </li>
            <li>
              <Link to={'/props/props-with-rendering'}>props와 렌더링</Link>
            </li>
            <li>
              <Link to={'/hooks/forward-ref-test'}>forward-ref</Link>
            </li>
            <li>
              <Link to={`/hooks/use-callback-test`}>useCallback</Link>
            </li>
            <li>
              <Link to={`/hooks/use-callback-wrong-usages`}>useCallback의 잘못된 사용 사례</Link>
            </li>
            <li>
              <Link to={'/hooks/use-context-test'}>useContext</Link>
            </li>
            <li>
              <Link to={'/hooks/use-effect-test'}>useEffect</Link>
            </li>
            <li>
              <Link to={'/hooks/use-effect-with-use-ref'}>useEffect with useRef</Link>
            </li>
            <li>
              <Link to={'/hooks/use-memo-test'}>useMemo</Link>
            </li>
            <li>
              <Link to={'/hooks/use-reducer-test-1'}>useReducer #1</Link>
            </li>
            <li>
              <Link to={'/hooks/use-reducer-test-2'}>useReducer #2</Link>
            </li>
            <li>
              <Link to={'/hooks/use-reducer-test-3'}>useReducer #3</Link>
            </li>
            <li>
              <Link to={'/hooks/use-ref-with-dom'}>useRef with DOM</Link>
            </li>
            <li>
              <Link to={'/hooks/use-ref-test'}>useRef</Link>
            </li>
          </ul>
          <p>React Router</p>
          <ul>
            <li>
              <Link to={'/third-party/react-router/react-router-hooks/foo?bar=123'}>
                React Router's hooks
              </Link>
            </li>
          </ul>
          <p>Vercel</p>
          <ul>
            <li>
              <Link to={'/third-party/vercel/swr-test'}>useSWR</Link>
            </li>
          </ul>
          <p>Day.js</p>
          <ul>
            <li>
              <Link to={'/third-party/dayjs/dayjs'}>Day.js</Link>
            </li>
          </ul>
          <p>MUI X</p>
          <ul>
            <li>
              <Link to={'/third-party/mui-x/date-picker'}>DatePicker</Link>
            </li>
          </ul>
          <p>React Hook Form</p>
          <ul>
            <li>
              <Link to={'/third-party/react-hook-form/validation'}>Validation</Link>
            </li>
          </ul>
          <p>Immer</p>
          <ul>
            <li>
              <Link to={'/third-party/immer/immer1'}>Immer test#1</Link>
            </li>
            <li>
              <Link to={'/third-party/immer/immer2'}>Immer test#2</Link>
            </li>
          </ul>
          <p>useHooks</p>
          <ul>
            <li>
              <Link to={'/third-party/use-hooks/use-script-test'}>useScript() test</Link>
            </li>
          </ul>
        </nav>
        <article>{pathname === '/' ? <p>좌측의 링크를 누르thㅔ요</p> : <Outlet />}</article>
      </main>
    </>
  );
}
