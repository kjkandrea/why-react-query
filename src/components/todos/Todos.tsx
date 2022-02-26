import React from 'react';
import { getIssues } from '@/api';
import { useQuery } from 'react-query';

const Todos = () => {
  const issues = useQuery('issues', getIssues);

  console.log(issues);

  return <h1>안녕 나 투두리스트</h1>;
};

export default Todos;
