import { useMutation, useQuery, useQueryClient } from 'react-query';
import { deleteIssues, getIssues, PostIssue, postIssues } from '@/api';

export const useIssues = () => {
  const queryClient = useQueryClient();
  const key = 'issue';
  const mutationOption = {
    onSuccess: () => queryClient.invalidateQueries(key),
  };

  return {
    create: useMutation(key, (data: PostIssue) => postIssues(data), mutationOption),
    read: useQuery(key, getIssues),
    patch: {
      close: useMutation(key, (issueNo: number) => deleteIssues(issueNo), mutationOption),
    },
  };
};
