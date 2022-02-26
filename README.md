# why-react-query
왜 react-query 를 좋아할까 파보기

## useQuery

query key 와 query function 으로 구성됨

```ts
const todos = useQuery('todos', fetchTodos) 
// 'todos' === Query Key
// fetchTodos === Query Function
```