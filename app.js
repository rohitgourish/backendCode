const express = require('express');
const app = express();
var routerUser = require('./router/user');
app.use(express.json());

app.use(routerUser);


app.listen(3000, () => {
    console.log('server running successfully at 3000');
})