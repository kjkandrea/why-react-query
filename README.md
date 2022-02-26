# why-react-query
왜 react-query 를 좋아할까 파보기

## useQuery

Query Key 와 Query Function 으로 구성됨

```ts
const todos = useQuery('todos', fetchTodos) 
// 'todos' === Query Key
// fetchTodos === Query Function
```

* Query Key : React DevTools 디버깅용. Symbol 쓸때 key 같은 명시적인 의미로 사용하는듯