import axios from 'axios';
import { personal } from '../../config/token';

interface Issue {
  title: string;
  id: number;
}

const API_URL = 'https://api.github.com/repos/kjkandrea/why-react-query';

export const getIssues = (): Promise<Issue[]> => axios.get(API_URL + '/issues').then(res => res.data);

export const postIssues = () =>
  axios.post(
    API_URL + '/issues',
    {
      title: 'title',
    },
    {
      headers: {
        Authorization: `Bearer ${personal}`,
      },
    },
  );
