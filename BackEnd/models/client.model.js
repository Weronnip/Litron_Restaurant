class Client {
    constructor(id_user, name_user, email_user, password, balance_user, payment_method) {
        this.id_user = id_user;
        this.name_user = name_user;
        this.email_user = email_user;
        this.password = password;
        this.balance_user = balance_user;
        this.payment_method = payment_method;
    }

    save() {
        Client.push(this);
    }

    static getAll() {
        return;
    }
}