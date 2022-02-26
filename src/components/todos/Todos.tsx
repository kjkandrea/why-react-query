import React, { useEffect } from 'react';
import { getIssues } from '@/api';
// import {} from 'react-query';

const Todos = () => {
  useEffect(() => {
    getIssues().then(console.log);
  }, []);

  return <h1>안녕 나 투두리스트</h1>;
};

export default Todos;
