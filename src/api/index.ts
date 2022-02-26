import axios from 'axios';
import { personal } from '../../config/token';

interface Issue {
  title: string;
  id: number;
  number: number;
}

export interface PostIssue {
  title: string;
}

const API_URL = 'https://api.github.com/repos/kjkandrea/why-react-query';

// TODO: axios request intercept
const config = {
  headers: {
    Authorization: `Bearer ${personal}`,
  },
};

export const getIssues = (): Promise<Issue[]> => axios.get(API_URL + '/issues', config).then(res => res.data);

export const postIssues = (data: PostIssue) => axios.post(API_URL + '/issues', data, config);

export const closeIssues = (issueNo: number) =>
  axios.update(
    API_URL + `/issues/${issueNo}`,
    {
      state: 'closed',
    },
    config,
  );
