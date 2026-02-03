const { FlightRepository } = require('../repository');
const {flightServices} = require('../services/index');

const flightServices = new flightServices();

const create = async (req, res) => {
    try {
        const flight = await flightServices.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            err: {},
            message: 'Successfully created a flight'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to create a flight',
            err: error
        });
    }
}

const getAll=async(req,res)=>{
    try {
     console.log(req.query);
     const flights=await FlightRepository.getAllFlightsData(req.query);
     return res.status(200).response({
        data:flights,
        success:true,
        message:"Succesfully fetched the All data",
        err:{}
     })
     
    } catch (error) {
        console.log(error);
        return res.json({
            data:{},
            success:false,
            message:"Unable to fetch the all flights data",
            err:error
        })
        
    }
}

module.exports = {
    create,getAll
}