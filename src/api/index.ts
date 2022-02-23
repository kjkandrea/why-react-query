import axios from 'axios';

export const getRepositories = () =>
  axios.get('https://api.github.com/repos/kjkandrea/why-react-query').then(res => res.data);
