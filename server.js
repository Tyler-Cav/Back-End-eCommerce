const express = require('express');
const routes = require('./Develop/routes');
//*TUTOR QUESTION: Since the model path locations are within the develop/routes path. Do I not need to import the models folder?
const sequelize = require('./Develop/config/connection');
// imported sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: true }).then(() => {
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
});