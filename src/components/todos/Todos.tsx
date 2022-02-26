import React from 'react';
import { useIssues } from '@/hooks/api/issue';
import { useMutation } from 'react-query';
import { PostIssue, postIssues } from '@/api';

const Todos = () => {
  const issues = useIssues();
  const postIssue = useMutation(['issues', 'post'], (data: PostIssue) => postIssues(data));

  if (issues.isLoading) return <h1>로딩중!!</h1>;

  return (
    <>
      <button
        onClick={() => {
          postIssue.mutate({
            title: '후룽부룽',
          });
        }}
      >
        post issue: 후룽부룽
      </button>
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
