require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive')
const ctrl = './controller';


const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json());



massive(CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
    console.log('Connected to Database');
  });

//   app.get(`/api/inventory`, ctrl.getAllInv);

//   app.get(`/api/inventory/:id`, ctrl.getOneInv);

//   app.post(`/api/inventory`, ctrl.createInv);

//   app.delete(`/api/inventory/:id`, ctrl.deleteInv);

//   app.update(`/api/inventory/:id`, ctrl.updateInv);








app.listen(SERVER_PORT, ()=>{console.log(`Making 💰 MONEY💰 on Port: ${SERVER_PORT}!`)})