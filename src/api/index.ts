import axios from 'axios';

interface Issue {
  title: string;
  id: number;
}

export const getIssues = (): Promise<Issue[]> =>
  axios.get('https://api.github.com/repos/kjkandrea/why-react-query/issues').then(res => res.data);
