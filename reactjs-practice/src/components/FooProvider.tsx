import {createContext, useState, ReactNode} from 'react';

export const Foo = createContext<{
  count: number;
  increment: () => void;
}>({
  count: undefined,
  increment: undefined
});

export default function FooProvider({children}: {children: ReactNode}) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(prev => prev + 1);
  }

  return <Foo.Provider value={{count, increment}}>{children}</Foo.Provider>;
}
