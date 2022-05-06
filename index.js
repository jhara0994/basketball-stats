const path = require('path');
const express = require('express');
const session = require('express-session');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
  });