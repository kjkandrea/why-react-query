import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const TodoApp = () => (
  <QueryClientProvider client={queryClient}>
    <h1>안녕, 이건 리액트 쿼리를 테스트 해보는 투두앱이야!!</h1>
  </QueryClientProvider>
);

export default TodoApp;
