const db = require("./../sql")
exports.getCustomers = async (req,res) => {
    db.query('Select * from customers',(err,results)=>{
        if(err){
            console.log(err.sqlMessage)
            res.status(200).json({
                error:err.sqlMessage
            }) 
        }
        else
        {
            res.status(200).json({
                results:results
            }) 
        }
    })
}