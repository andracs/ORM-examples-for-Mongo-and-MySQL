/* 
*  1. Rename this file to settings.js
*  2. Update the file with creds from your database 
*/
const mongo_uri = 'mongodb+srv://<username>:<password>@<server>/<database>?retryWrites=true&w=majority'

const mysql_connection = {
    'host' : '<host>',
    'user' : '<username>',
    'password' : '<password>',
    'database' : '<database>'
}

module.exports = { mysql_connection, mongo_uri };