import React, {useEffect} from 'react';
import useSWR from 'swr';

// 데이터 타입 정의
interface User {
  id: number;
  name: string;
  email: string;
}

// 모의 fetcher 함수: 3초 후에 데이터 반환
const fetcher = async (url: string): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'Test User',
        email: 'test@example.com',
      });
    }, 2000);
  });
};

export default function UseSwrTest(): React.JSX.Element {
  const { data, error, isLoading } = useSWR<User>('/api/user', fetcher);

  useEffect(() => {
    console.log('data:', data);
  }, [data])
  useEffect(() => {
    console.log('error:', error);
  }, [error])
  useEffect(() => {
    console.log('isLoading:', isLoading);
  }, [isLoading])

  return (
    <section>
      <h2>useSWR Test #1</h2>
      {
        error ? (
          <div>failed to load</div>
        ) : isLoading ? (
          <div>loading...</div>
        ) : (
          <>
            <p>hello, {data?.name}!</p>
            <p>Email: {data?.email}</p>
          </>
        )
      }
    </section>
  );
}
