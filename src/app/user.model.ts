export class UserRegister {
    fullName: string;
    email: string;
    password: string;

    constructor() {
        this.email = '';
        this.password = '';
        this.fullName = '';
    }

}

export class UserLogin {

    email: string;
    password: string;

    constructor() {
        this.email = '';
        this.password = '';
    }

}