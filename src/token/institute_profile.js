const sql = require('mssql')
const bcrypt = require('bcrypt')

const instituteRegister = async (connection, userData.step) =>
{
    const request = new sql.Request(connection)
    const mode = 'INSERT'
    const typeid = "1"
    const groupid = "1"
    const catid = "1"
    const subcatid = "1"
    const istname = userdata.step1.institute_name
    const displayname = userdata.step1.display_name
    const mobile = userdata.step1.mobile
    const email = userdata.step1.email
    const password = userdata.step1.password
    const cperson = userdata.step1.contact_person
    const designation = userdata.step1.designation
    const contactnumber = userdata.step1.contact_number
    const address = "NA"
    const building = userdata.step2.building
    const street = userdata.step2.street
    const landmark = userdata.step2.landmark
    const area = userdata.step2.area
    const city = userdata.step2.city
    const pincode = userdata.step2.pincode
    const district = userdata.step2.district
    const state = userdata.step2.state
    const country = userdata.step2.country
    const location = "NA"
    const latitude = "NA"
    const longitude = "NA"
    const phone = userdata.step3.phone
    const whatsapp = userdata.step3.whatsapp
    const website = userdata.step3.website
    const youtube = userdata.step3.Youtube
    const facebook = userdata.step3.facebook
    const instagram = userdata.step3.instagram
    const twitter = userdata.step3.twitter
    const userid = "NA"
    // const created = userdata.step3
    // const modified = userdata.step3
    // const deleted = userdata.step3
    // const remarks = userdata.step3
    // const status = userdata.step3
}

module.exports = {
    instituteRegister
}