const sql = require('mssql')
const bcrypt = require('bcrypt')

const instituteRegister = async (connection, userData,callback) =>
{
    const request = new sql.Request(connection)
    const mode = 'INSERT'
    const typeid = "1"
    const groupid = "1"
    const catid = "1"
    const subcatid = "1"
    const istname = userData.step1.institute_name
    const displayname = userData.step1.display_name
    const mobile = userData.step1.mobile
    const email = userData.step1.email
    const password = userData.step1.password
    const paswdHash = await bcrypt.hash(password, 8)
    const cperson = userData.step1.contact_person
    const designation = userData.step1.designation
    const contactnumber = userData.step1.contact_number
    const building = userData.step2.building
    const street = userData.step2.street
    const landmark = userData.step2.landmark
    const area = userData.step2.area
    const city = userData.step2.city
    const pincode = userData.step2.pincode
    const district = userData.step2.district
    const state = userData.step2.state
    const country = userData.step2.country
    const location = "NA"
    const latitude = 11.2588
    const longitude = 75.7804
    const address = building +", "+street+", "+landmark+", "+area+", "+city+", "+district+", "+state+", "+country+", "+pincode
    const phone = userData.step3.phone
    const whatsapp = "0000099999"
    const website = userData.step3.website
    const youtube = userData.step3.Youtube
    const facebook = userData.step3.facebook
    const instagram = userData.step3.instagram
    const twitter = userData.step3.twitter
    const userid = "NA"
    const remarks = "NA"
    const status = 'ACTIVE'
    request.input('MODE', sql.NVarChar(50), mode)
    request.input('TYPEID', sql.NVarChar(50), typeid)
    request.input('GROUPID', sql.NVarChar(50), groupid)
    request.input('CATID', sql.NVarChar(50), catid)
    request.input('SUBCATID', sql.NVarChar(50), subcatid)
    request.input('ISTNAME', sql.NVarChar(sql.MAX), istname)
    request.input('DISPLAYNAME', sql.NVarChar(50), displayname)
    request.input('MOBILE', sql.NVarChar(50), mobile)
    request.input('EMAIL', sql.NVarChar(50), email)
    request.input('PASSWORD', sql.NVarChar(sql.MAX), paswdHash)
    request.input('CPERSON', sql.NVarChar(50), cperson)
    request.input('DESIGNATION', sql.NVarChar(50), designation)
    request.input('CONTACTNUMBER', sql.NVarChar(50), contactnumber)
    request.input('ADDRESS', sql.NVarChar(sql.MAX), address)
    request.input('BUILDING', sql.NVarChar(50), building)
    request.input('STREET', sql.NVarChar(50), street)
    request.input('LANDMARK', sql.NVarChar(50), landmark)
    request.input('AREA', sql.NVarChar(50), area)
    request.input('CITY', sql.NVarChar(50), city)
    request.input('PINCODE', sql.NVarChar(50), pincode)
    request.input('DISTRICT', sql.NVarChar(50), district)
    request.input('STATE', sql.NVarChar(50), state)
    request.input('COUNTRY', sql.NVarChar(50), country)
    request.input('LOCATION', sql.NVarChar(50), location)
    request.input('LATITUDE', sql.Decimal(12, 9), latitude)
    request.input('LONGITUDE', sql.Decimal(12, 9), longitude)
    request.input('PHONE', sql.NVarChar(50), phone)
    request.input('WHATSAPP', sql.NVarChar(50), whatsapp)
    request.input('WEBSITE', sql.NVarChar(50), website)
    request.input('YOUTUBE', sql.NVarChar(50), youtube)
    request.input('FACEBOOK', sql.NVarChar(50), facebook)
    request.input('INSTAGRAM', sql.NVarChar(50), instagram)
    request.input('TWITTER', sql.NVarChar(50), twitter)
    request.input('USERID', sql.NVarChar(50), userid)
    request.input('CREATED', sql.DateTime2, new Date())
    request.input('MODIFIED', sql.DateTime2, new Date())
    request.input('DELETED', sql.DateTime2, new Date())
    request.input('REMARKS', sql.NVarChar(sql.MAX), remarks)
    request.input('STATUS', sql.NVarChar(50), status)

    await request.execute('YESQTOCKENSDEV.dbo.INSTITUTEACCOUNT_STP', (error, result) => {
        if (error) {
            callback(error, undefined)
        }
        callback(undefined, result)
    })
}
const instituteListing = async (connection, callback) => {
    const request = new sql.Request(connection)
    request.input('MODE',sql.NVarChar(50), 'SELECTALL')
    await request.execute('YESQTOCKENSDEV.dbo.INSTITUTEACCOUNT_STP', (error, result) => {
        if (error) {
            callback(error, undefined)
        }
        callback(undefined, result)
    })
}

module.exports = {
    instituteRegister,
    instituteListing
}