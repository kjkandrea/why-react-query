import React, { useState } from 'react';
import { getIssues } from '@/api';
import { useQuery } from 'react-query';

const Todos = () => {
  const [issuesEnabled, setIssuesEnabled] = useState(false);
  const issues = useQuery('issues', getIssues, {
    enabled: issuesEnabled,
  });

  if (issues.isLoading) return <h1>로딩중!!</h1>;

  return (
    <>
      {!issues.isFetched && <button onClick={() => setIssuesEnabled(true)}>fetch</button>}
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
