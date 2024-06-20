const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js')
const productRoute = require("./routes/product.route.js")

const app = express()
//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
  app.use("/api/products",productRoute);


app.get('/', (req, resp) => {
    resp.send("jello from reet node api")
});


mongoose.connect("mongodb+srv://akshit07plp:HJQzwkL6WTPerwyS@2224283.4zrnvbm.mongodb.net/NpiWrites=true").then(() => {
    console.log("connected to database");
    app.listen(4000, () => {
        console.log("server is running")
    });

})
    .catch(() => {
        console.log("Connection failed")
    })