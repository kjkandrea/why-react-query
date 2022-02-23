import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Todos from '@/components/todos/Todos';

const queryClient = new QueryClient();

const TodoApp = () => (
  <QueryClientProvider client={queryClient}>
    <Todos />
  </QueryClientProvider>
);

export default TodoApp;
