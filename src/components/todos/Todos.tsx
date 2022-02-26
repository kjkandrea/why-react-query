import React from 'react';
import { useIssues } from '@/hooks/domain/issue';

const Todos = () => {
  const issues = useIssues();

  return (
    <>
      {(issues.read.isLoading || issues.create.isLoading) && <h1>로딩중...</h1>}

      <button
        onClick={() => {
          issues.create.mutate({
            title: '후룽부룽',
          });
        }}
      >
        post issue: 후룽부룽
      </button>
      <ul>
        {issues.read.data &&
          issues.read.data.map(issue => (
            <li key={issue.id}>
              <h2>
                {issue.title} : {issue.id}
              </h2>
              <button
                onClick={() => {
                  issues.patch.close.mutate(issue.number);
                }}
              >
                close
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Todos;
