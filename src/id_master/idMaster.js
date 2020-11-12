
const getIdmaster = (relation, connection) => {
    return new Promise((resolve, reject) => {
        const sql = require('mssql')
        const request = new sql.Request(connection)
        request.input('relation', sql.NVarChar(50), relation)
        request.query('SELECT * FROM IDMASTER WHERE RELATION= @relation', (error, result, returnValue) => {
            if (error != undefined) {
                reject("Can't get idmaster current value");
            } else {
                const NValue = result.recordset[0].NEXTVALUE
                resolve(NValue)
            }
        })
    })

}
const updateIdmaster = (relation, CValue, NValue, connection) => {
    return new Promise((resolve, reject) => {
        const sql = require('mssql')
        const request = new sql.Request(connection)

        request.input('relation', sql.NVarChar(50), relation)
        request.input('CValue', sql.NVarChar(50), CValue)
        request.input('NValue', sql.NVarChar(50), NValue)

        request.query('UPDATE IDMASTER SET CURRENTVALUE = @CValue,NEXTVALUE = @NValue WHERE RELATION = @relation', (error, result, returnValue) => {
            if (error != undefined) {
                reject("IdMaster updation error!");
            } else {
                resolve(result)
            }
        })

    })
}
module.exports = {
    getIdmaster,
    updateIdmaster
}



