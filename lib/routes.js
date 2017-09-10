const utils = require('./utils');

module.exports = function (app) {
    app.post('/user/register', function (request, response) {
        const data = request.body;
        const db = request.app.db;
        utils.saveUser(db, data, function (err, res) {
            if (err) {
                return response.status(500).send({
                    error: 'something blew up',
                    success: false,
                });
            }
            return response.json({
                sucess: res.insertedCount > 0,
                id: res.insertedId,
                data: data
            })
        });
    })

    app.post('/users/login', function (request, response) {
        const data = request.body;
        const db = request.app.db;

        utils.loginUser(db, data, function (err, res) {
            if (err) {
                return response.status(500).send({
                    error: 'something blew up',
                    success: false,
                });
            }
            return response.json({
                sucess: true
            })
        });

    })
}
