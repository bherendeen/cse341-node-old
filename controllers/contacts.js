const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// get all contacts
const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db('school').collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

// get a single contact
const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db('school')
        .collection('contacts')
        .find({
            _id: userId
        });
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
    });
};

module.exports = {
    getAll,
    getSingle
};