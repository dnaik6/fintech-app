const dbService = require('../services/db.service');


const createData = async (req, res, Schema) => {
try{
    const data = req.body;
    const dbRes = await dbService.createNewRecord(data, Schema);
        res.status(200).json({
        message : "Data inserted successfully",
        success: true,
        data: dbRes
    })

}

catch(error){
    res.status(500).json({
        message : "Internal Server Error",
        error
    })

}
}
module.exports = {
    createData 
}