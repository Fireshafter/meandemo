export class User {
    constructor(
        public _id: number = Math.floor(Math.random() * 100),
        public first_name: string="",
        public last_name: string="",
        public email : string="",
        public editable : boolean = false
    ){

    }

    from(user: User): void {
        this._id = user._id;
        this.first_name = user.first_name;
        this.last_name = user.last_name;
        this.email = user.email;
        this.editable = user.editable;
    }
}
