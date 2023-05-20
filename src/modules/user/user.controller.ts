import User from "./user.model";
import { Request, Response } from "express";

export const createNewUser = async (req: Request, res: Response) => {
    try {
        const newUser = new User({
            name: "Musa",
            age: 21,
            gender: "male",
            email: "mohammad.musa706@gmail.com",
        })
        await newUser.save();
        res.send(newUser);
    }
    catch (err) {
        console.log(err)
        res.send(err)
    }
}
