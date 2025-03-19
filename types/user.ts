export interface CreateUser{
    firstName : string;
    lastName : string;
    email : string | null;
    password : string;
    role? : string;
}