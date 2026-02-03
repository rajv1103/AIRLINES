
const crudRespository = require('./crudRespository');
const { Airport } = require('../models/index');
class airportRespository extends crudRespository {
    constructor() {
        super(Airport);
    }
}

module.exports = airportRespository;