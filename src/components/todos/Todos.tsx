import React from 'react';
import { useIssues } from '@/hooks/api/issue';

const Todos = () => {
  const issues = useIssues();

  if (issues.isLoading) return <h1>로딩중!!</h1>;

  return (
    <>
      <ul>
        {issues.data &&
          issues.data.map(issue => (
            <li key={issue.id}>
              <h2>{issue.title}</h2>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Todos;
