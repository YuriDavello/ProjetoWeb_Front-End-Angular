import { UsersData } from "./usersdata";

export class User {
    id?: string;
    username?: string;
    password?: string;
    usersData?: UsersData;

    constructor(username?: string, password?: string, usersData?: UsersData) {
        this.username = username;
        this.password = password;
        this.usersData = usersData;
    }
}