import axios from 'axios';

export const getIssues = () =>
  axios.get('https://api.github.com/repos/kjkandrea/why-react-query/issues').then(res => res.data);
