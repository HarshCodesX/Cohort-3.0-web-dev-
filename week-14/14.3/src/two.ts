// Partial - makes all properties of a type optional, creating a type with the same properties, but each marked as optional

// we can use "pick" to create a new type, we can pick values from a interface as well as type

type User = {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}

type UpdateProps = Pick<User, 'name' | 'age' | 'email'>;

// if user want to only update few things, but we expect all the three to be present, so we can make it optional
type UpdatePropsOptional = Partial<UpdateProps>

function updateUser(updatedProps: UpdatePropsOptional){
    // hit the db and update the user
}