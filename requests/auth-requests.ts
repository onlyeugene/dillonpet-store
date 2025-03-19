import { LOGIN_USER, REGISTER_USER } from "@/services/api";
import instance from "@/services/axios-instance";
import { CreateUser } from "@/types/user";

export const registerUser = async (payload: CreateUser) => {
    const response = await instance.post(REGISTER_USER, payload)
    return response.data
};

export const loginUser = async (data: {email: string, passsword: string}) => {
    const response = await instance.post(LOGIN_USER, data)
    return response.data
}
