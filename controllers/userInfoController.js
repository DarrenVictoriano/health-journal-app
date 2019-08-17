const db = require("../models")

module.exports = {

    findAll: function (req, res) {
        db.UserInfo.find(req.query)
            .then(dbUserInfo => {
                res.json(dbUserInfo)
            }).catch(err => res.status(422).json(err));
    }
}