import React from 'react';
// import TodoApp from '@/views/TodoApp';
import DeliveryList from '@/views/DeliveryList';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <DeliveryList />
  </QueryClientProvider>
);

export default App;
