const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;

let UserInfoSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    DoB: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
});

let UserInfo = mongoose.model("UserInfo", UserInfoSchema);

module.exports = UserInfo;