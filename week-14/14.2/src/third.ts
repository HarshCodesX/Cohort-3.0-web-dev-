//types in typescript
// diff between types and interfaces is that classes can also implement the interface
// types let you do unions and intersections (this is another diff between types and interfaces)

type User = {
    name: string;
    age: number
}

function isLegal(user: User){
    return user.age > 18;
}