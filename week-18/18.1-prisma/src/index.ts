import {PrismaClient} from '@prisma/client';

const client = new PrismaClient();

async function createUser(){
    await client.user.create({
    data: {
        username: "harsh",
        password: "harsh123",
        age: 22,
        city: "Delhi"
    }
    })
}

createUser();