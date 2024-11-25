const express = require('express');
const app = express();
const homeRouter = require('./routes/index');
const brandRouter = require('./routes/brand');
const categoryRouter = require('./routes/category');
const productRouter = require('./routes/product');

app.use('/', homeRouter);
app.use('/brand', brandRouter);
app.use('/category', categoryRouter);
app.use('/product', productRouter);

app.listen(3000, () => {
    console.log("Server is running at port 3000");
});