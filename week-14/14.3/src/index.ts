// we can use "pick" to create a new type, we can pick values from a interface as well as type

type User = {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>;
function updateUser(updatedProps: UpdateProps){
    // hit the db and update the user
}