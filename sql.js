const sql = require("mysql")
var pool = sql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME,
    port:process.env.DB_PORT
})
pool.getConnection((err)=>{
    if(err)
    {
        console.log(pool)
        throw Error("ConnectionFailed")
    }

})
module.exports = pool