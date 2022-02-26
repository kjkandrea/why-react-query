import axios from 'axios';
import { personal } from '../../config/token';

interface Issue {
  title: string;
  id: number;
}

export interface PostIssue {
  title: string;
}

const API_URL = 'https://api.github.com/repos/kjkandrea/why-react-query';

export const getIssues = (): Promise<Issue[]> =>
  axios
    .get(API_URL + '/issues', {
      headers: {
        Authorization: `Bearer ${personal}`,
      },
    })
    .then(res => res.data);

export const postIssues = (data: PostIssue) =>
  axios.post(API_URL + '/issues', data, {
    headers: {
      Authorization: `Bearer ${personal}`,
    },
  });
