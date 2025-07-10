const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json()); // Middleware to parse JSON bodies

const db = require('./models/');

//Routers
const petsRouter = require('./routes/Pets');
const productsRouter = require('./routes/Product');
const usersRouter = require('./routes/User');
app.use(cors());
app.use("/pets", petsRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);
app.use('/uploads', express.static('uploads'));

db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });
});