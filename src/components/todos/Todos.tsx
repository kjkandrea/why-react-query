import React from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { getIssues, PostIssue, postIssues } from '@/api';

const Todos = () => {
  const queryClient = useQueryClient();
  const issues = useQuery('issues', getIssues);
  const postIssue = useMutation(['issues', 'post'], (data: PostIssue) => postIssues(data), {
    onSettled: () => {
      console.log('onSettled');
      queryClient.invalidateQueries('issues').then(console.log);
    },
  });

  if (issues.isLoading) return <h1>로딩중!!</h1>;

  return (
    <>
      <button
        onClick={() => {
          postIssue.mutate({
            title: `후룽부룽 ${issues?.data?.length ?? 0}`,
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
