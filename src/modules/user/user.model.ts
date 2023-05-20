import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    id: {
        type: String,
        unique: true,
    },
    role: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        firstName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
            required: true,
        }
    },

    gender: {
        type: String,
        enum: ['male', "female"],
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    dataOfBirth: {
        type: String
    },
    contactNo: {
        type: String,
        required: true
    },
    emergencyContactNo: {
        type: String
    },
    presentAddress: {
        type: String
    },
    permanentAddress: {
        type: String
    },
})

const User = model<IUser>('User', userSchema);
export default User;