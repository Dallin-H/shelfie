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

const baseurl = '/api/products';

// app.get('/api/item', cr.getList)
// app.post('/api/item', cr.addItem)
// app.put('/api/item/:index', cr.editItem)
// app.delete('/api/item/:index', cr.deleteItem)




const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`${PORT}: tossin lightning!!`))