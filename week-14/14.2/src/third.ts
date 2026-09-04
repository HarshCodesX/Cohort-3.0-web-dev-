//types in typescript
// diff between types and interfaces is that classes can also implement the interface
// types let you do unions and intersections (this is another diff between types and interfaces)


// Intersection example (it can have all the properties of each type)
type Employee = {
    name: string;
    startDate: Date;
}

type Manager = {
    name: string;
    department: string;
}

type TeamLead = Employee & Manager

const teamLead: TeamLead = {
    name: "harkirat",
    startDate: new Date(),
    department: "Software developer"
};

// Union example (it can have either properties of each type as well as all the properties of each type)

type GoodUser = {
    name: string;
    gift: string;
}

type BadUser = {
    name: string;
    ip: string;
}

type User = GoodUser | BadUser;

const user: User = {
    name: "harsh",
    gift: "ps5",
    ip: "dfg8"
}