import React from 'react';
import { getIssues } from '@/api';
import { useQuery } from 'react-query';

const Todos = () => {
  const issues = useQuery('issues', getIssues);

  if (issues.isLoading) return <h1>로딩중!!</h1>;

  return (
    <ul>
      {issues.data &&
        issues.data.map(issue => (
          <li key={issue.id}>
            <h2>{issue.title}</h2>
          </li>
        ))}
    </ul>
  );
};

export default Todos;
