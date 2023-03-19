const db = require("./../sql")
const countperpage = 5
exports.getCustomers = async (req,res) => {
    const offset = (req.query.pageno-1)*countperpage || 0
    var pages = 0
    db.query(`Select count(*) as count from Customers`,(err,results,fields)=>{
        if(err){
            res.status(400).json({
                error:err.sqlMessage
            })
        }
        else
        {
            pages = Math.ceil(results[0].count/countperpage)
        }
    })
    db.query(`Select * from Customers`,(err,results,fields)=>{
        if(err){
            res.status(400).json({
                error:err.sqlMessage
            })
        }
        else
        {
            res.status(200).json({
                result:results,
                pages:pages
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
    const id = req.params.id
    db.query(`Select id,name from Customers Where name like '%${name}%' and id!=${id}`,(err,results,fields)=>{
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
exports.transferMoney = async (req,res) => {
    const senderId = req.body.senderId
    const recipientId = req.body.recipientId
    const amount = req.body.amount
    db.getConnection((err,conn)=>{
        if(err) throw Error("Failed to get connection");
        conn.beginTransaction((err)=>{
            if(err) throw Error("Failed to begin transaction")
            conn.query(`Update Customers set current_balance=current_balance-${amount} where id = ${senderId}`,(err,results,fields)=>{
                if(err){
                    res.status(400).json({
                        error:err.sqlMessage
                    })
                    return conn.rollback();
                }
                conn.query(`Update Customers set current_balance=current_balance+${amount} where id = ${recipientId}`,(err,results,fields)=>{
                    if(err){
                        res.status(400).json({
                            error:err.sqlMessage
                        })
                        return conn.rollback();
                    }
                    conn.query(`Insert into Transfers (sender_id,recipient_id,amount) values(${senderId},${recipientId},${amount})`,(err,results,fields)=>{
                        if(err){
                            res.status(400).json({
                                error:err.sqlMessage
                            })
                            return conn.rollback();
                        }
                        conn.commit((err)=>{
                            if(err){
                                res.status(400).json({
                                    error:err.sqlMessage
                                })
                                return conn.rollback();
                            }
                            res.status(200).json({
                                status:"Success"
                            })
                        })
                    })
                })
            })
        })
    })
}
exports.getTransfers = async (req,res) => {
    const offset = (req.query.pageno-1)*countperpage || 0
    var pages = 0
    db.query(`Select count(*) as count from Customers`,(err,results,fields)=>{
        if(err){
            res.status(400).json({
                error:err.sqlMessage
            })
        }
        else
        {
            pages = Math.ceil(results[0].count/countperpage)
        }
    })
    db.query(`Select Sender.name as Sender, Recipient.name as Recipient, amount as Amount, transfer_date
    from Transfers
    Inner Join Customers as Sender on (sender_id=Sender.ID)
    Inner Join Customers as Recipient on (recipient_id=Recipient.ID)
    order by transfer_date desc
    limit ${countperpage} offset ${offset}`,(err,results,fields)=>{
        if(err){
            res.status(400).json({
                error:err.sqlMessage
            })
        }
        else
        {
            results.forEach(element => {
                element.transfer_date = new Date(element.transfer_date).toLocaleDateString()
            });
            res.status(200).json({
                result:results,
                pages:pages
            })
        }
    })
}