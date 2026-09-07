//type inference in zod
// when using zod, we are doing runtime validation
// for example, the following code makes sure that the user is sending the right inputs to update their profile information

import {z} from 'zod';
import express from express;

const app = express();

//define schema for profile update
const userProfileSchema = z.object({
    name: z.string().min(1, {message: "Name cannot be empty"}),
    email: z.string().email({message: "Invalid email format"}),
    age: z.number().min(18, {message: "You must be atleast 18 years old"}).optional(),
});

type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
    const {success} = userProfileSchema.safeParse(req.body);
    const updateBody: FinalUserSchema = req.body;

    if(!success){
        res.status(411).json({});
        return;
    }
    // update db here
    res.json({
        message: "User updated"
    });
});

app.listen(3000);