/**
 * @file 인덱싱된 접근 타입(Indexed Access Types) 테스트
 */

{

  interface Database {
    public: {
      Tables: {
        posts: {
          Row: {
            seq: number
            title: string
            content: string
            created_at: string
            updated_at: string
          }
        }
      }
    }
  }

  type Post = Database['public']['Tables']['posts']['Row'];

  const post: Post = {
    seq: 1,
    title: 'Hello World',
    content: 'This is my first post.',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  }

  console.log(post);
}
