const express = require("express");

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.listen(4000, () => {
    console.log("Listening on port 4000");
});

const productAllData = [];

/**
 * main route
 */

app.get("/", (req, res) => {
    res.send("Connected");
})


/**
 * add products
 */

app.post("/api/addproduct", (req, res) => {
    console.log("Result", req.body);

    const singleProductData = {
        id: productAllData.length + 1,
        pname: req.body.pname,
        pprice: req.body.pprice,
        pdetails: req.body.pdetails,
    };

    productAllData.push(singleProductData);
    res.status(200).send({
        code: 200,
        message: "Product added successfully ",
        addedproduct: singleProductData
    });
});

app.get("/api/getProduct", (req, res) => {
    if (productAllData.length > 0) {
        res.status(200).send({ code: "200", productData: productAllData });
    } else {
        res.status(200).send({ code: 200, productData: [] });
    }
})