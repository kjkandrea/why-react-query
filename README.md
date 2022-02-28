# why-react-query
왜 react-query 를 좋아할까 파보기

## useQuery

**📌 CRUD 의 Read 역할**

Query Key 와 Query Function 으로 구성됨

```ts
const todos = useQuery('todos', f etchTodos) 
// 'todos' === Query Key
// fetchTodos === Query Function
```

* Query Key : React DevTools 디버깅용. Symbol 쓸때 key 같은 명시적인 의미로 사용하는듯

## useMutation

**📌 CRUD 의 Create, Update, Delete 역할**

## invalidateQueries : TODO

이거하면 stale 상태가 되서 refetch 가능함. 아직 뭔지 잘 모르겠음 ㅎ


## Test Drive

* **주문 데이터** : `useOrders`
* 주문 데이터내의 주문번호에 대한 **배송 데이터** : `useDeliveries`

### 시나리오

1. 주문데이터 fetch
2. 주문데이터 내의 주문번호 토대로 각 주문에 대한 배송데이터 fetch
3. 배송데이터 내의 유니크한 배송번호를 추려 **유니크한 배송번호에 대한 주문 내역 데이터 스트림 생성**

### 중점사항

* `useOrders` 와 `useDeliveries` 사이에 원할하게 데이터 참조 할 수 있는가?
* 두 데이터 합성을 통한 새로운 데이터 스트림 만드는건 어떻게 구현해야하는가? (rxjs 금지)

