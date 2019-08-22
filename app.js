const express = require('express');

const queensRouter = require('./routers/queens');

const app = express();
app.use('/queens', queensRouter);

app.listen(8080, () => {
  console.log('app running on port 8080');
}); 
