import React, { useEffect } from 'react';
import { getRepositories } from '@/api';
// import {} from 'react-query';

const Todos = () => {
  useEffect(() => {
    getRepositories().then(console.log);
  }, []);

  return <h1>안녕 나 투두리스트</h1>;
};

export default Todos;
