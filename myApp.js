let express = require('express');
let app = express();
const port = process.env.PORT || 3000;
const path = require('path');

app.use('/',(req, res, next) => {
  res.send("Hello World");
  console.log("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}
);


const bodyParser = require('body-parser');


































 module.exports = app;
