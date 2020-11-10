const express = require('express');
const hbs  = require('express-handlebars');
const router = require('./routes/index');
const app = express();
const path = require('path');


app.use('/', router);
const PORT = process.env.PORT || 8080;
app.listen(
    PORT,
    () => {
      console.log(`Listening to port ${PORT}`);
    }
  );
//Template engine setting
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

//middleware
app.use(express.static(path.join(__dirname,'public')));


