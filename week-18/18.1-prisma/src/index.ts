import express from "express";
import {PrismaClient} from '@prisma/client';

const app = express();
const client = new PrismaClient();

app.get("/", async (req, res) => {
    const users = await client.user.findMany();
    res.json({
        users
    });
});

app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;
    const users = await client.user.findOne({
        where: {
            id: parseInt(id)
        },
        select: {
            todos: true,
            username: true,
            password: true
        }
    })
})

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

async function deleteUser(){
    await client.user.delete({
        where: {
            id: 1
        }
    })
}


async function updateUser(){
    await client.user.update({
        where: {
            id: 1
        },
        data:{ 
            username: "harsh7562"
        }
    })
}

async function findFirst(){
    const user = await client.user.findFirst({
        where: {
            id: 1
        },
        select: {
            username: true // now it will only return the username of the user with id 1
        }
    });
}

async function getData(){
    const user = await client.user.findFirst({
        where: {
            id: 1
        },
        include: {
            todos: true
        }
    });
}

createUser();
deleteUser();
updateUser();
findFirst();
getData()