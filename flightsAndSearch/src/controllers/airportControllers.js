const { airportServices } = require('../services/index');

const airportServices = new airportServices();

const create = async (req, res) => {
    try {
        const response = await airportServices.create(req.body);
        return res.status(201).json({
            message: 'Successfully created the airport',
            err: {},
            data: response,
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            err: error,
            message: 'Cannot create a new airport'
        })
    }
}

module.exports = {
    create
}