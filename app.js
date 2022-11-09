const express = require('express')
const path = require('path')
const app = express()

app.set("view engine", "hbs")
app.set("views", __dirname + "/views")

require('./db/db-connection')

const Product = require('./models/product.model')


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/tienda', (req, res) => {
    Product
        .find()
        .then(allProducts => {
            res.render('products-page', { products: allProducts })
        })
        .catch(err => console.log(err))
    console.log(Product)
})


app.listen(5005, () => console.log('SERVIDOR LEVANTADO EN EL 5005'))