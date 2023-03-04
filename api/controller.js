const db = require("./../sql")
exports.getCustomers = async (req,res) => {
    db.query(`Select * from Customers`,(err,results,fields)=>{
        if(err){
            res.status(400).json({
                error:err.sqlMessage
            })
        }
        else
        {
            res.status(200).json({
                result:results
            })
        }
    })
}
exports.getCustomerById = async (req,res) => {
    const id = req.params.id
    db.query(`Select * from Customers Where id=${id}`,(err,results,fields)=>{
        if(err){
            res.status(400).json({
                error:err.sqlMessage
            })
        }
        else
        {
            res.status(200).json({
                result:results
            })
        }
    })
}
exports.getCustomerExceptId = async (req,res) => {
    const id = req.params.id
    db.query(`Select id,name from Customers Where id!=${id}`,(err,results,fields)=>{
        if(err){
            res.status(400).json({
                error:err.sqlMessage
            })
        }
        else
        {
            res.status(200).json({
                result:results
            })
        }
    })
}
exports.searchCustomerByName = async (req,res) => {
    const name = req.query.name
    db.query(`Select id,name from Customers Where name like '%${name}%'`,(err,results,fields)=>{
        if(err){
            res.status(400).json({
                error:err.sqlMessage
            })
        }
        else
        {
            res.status(200).json({
                result:results
            })
        }
    })
}