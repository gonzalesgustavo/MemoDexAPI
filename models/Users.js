module.exports = class User {
    constructor(name, email, username, pwd) {
        this._name = name;
        this._email = email;
        this._username = username;
        this._pwd = pwd;
    }
    async save(db) {
        try {
            const saved = await db.collection('users').insertOne(this);
            return saved;
        } catch (error) {
            console.log(error);
        }
    }
}