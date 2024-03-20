export interface User {
    data: Data;
    headers: any;
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
    role:        string;
}

export interface UserLogin {
    email:    string;
    password: string;
}


export interface GetToken {
    msg:          string;
    access_token: string;
    data:         Data;
}

export interface Data {
    id:          number;
    email:       string;
    username:    string;
    role:        null;
    createdAt:   Date;
    updatedAt:   Date;
    departament: string;
    charge:      string;
    tasks:       any[];
}
