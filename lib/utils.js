exports.saveUser = (db, data, cb) => {
    const collection = db.collection('documents');

    collection.insertOne(data, (err, res) => {
        cb(err, res);
    })
}


exports.loginUser = (db, data, cb) => {
    return cb(null, true);
}
