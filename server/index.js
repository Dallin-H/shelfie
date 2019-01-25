const express = require('express');
const bodyParser = require('body-parser')
const app = express();
require('dotenv').config();
const massive = require('massive');
const ctrl = require('./controller')

app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then((dbInstance) => {
    app.set('db', dbInstance)
}).catch(err => console.log(err));


app.get(`/api/inventory`, ctrl.getAll)
app.post(`/api/product`, ctrl.createProduct)
// app.put('/api/item/:index', cr.editItem)
// app.delete('/api/item/:index', cr.deleteItem)




const SERVERPORT = process.env.SERVERPORT || 4000
app.listen(SERVERPORT, () => console.log(`${ SERVERPORT}: tossin lightning!!`))