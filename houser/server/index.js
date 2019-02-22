require('dotenv').config();
const express = require('express');
const massive = require('massive')
const app = express()
const ctrl = require('./controller')

app.use(express.json());

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance)
}).catch(err => {
    console.log('There was an Error Connecting to Database')
})

app.get(`/api/houses`, ctrl.getAll)

app.post(`/api/houses`, ctrl.create)

app.delete(`/api/houses/:id`, ctrl.delete)







app.listen(SERVER_PORT, ()=> console.log(`Listening on Port: ${SERVER_PORT}`));

