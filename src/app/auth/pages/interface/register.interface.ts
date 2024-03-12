export interface User {
    msg:  string;
    user: UserClass;
}

export interface UserClass {
    id:          number;
    email:       string;
    username:    string;
    createdAt:   Date;
    updatedAt:   Date;
    departament: string;
    charge:      string;
    tasks:       any[];
}
export interface UserRegister {
    email:       string;
    password:    string;
    username:    string;
    departament: string;
    charge:      string;
}
