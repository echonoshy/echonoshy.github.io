最近在做一些重构的工作，越来越觉得简单的方案才是最好的方案。

过度设计是一种病。很多时候我们在解决还没有出现的问题，写着还不需要的抽象。

三行重复的代码，真的比一个过早的抽象更好。

```typescript
// 不需要这样
function createHandler<T extends BaseConfig>(config: T): Handler<T> { ... }

// 这样就够了
function handleUser(req: Request) { ... }
function handleOrder(req: Request) { ... }
```

简单不是偷懒，是克制。
