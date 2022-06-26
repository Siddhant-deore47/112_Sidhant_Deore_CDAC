const express = require('express');
const app = express();

app.use(express.static("cp"));

app.get('/addItem', (req, resp) => {

    resp.send("Add item needs to be done");
});

app.get('/updateItem', (req, resp) => {

    resp.send("Update item needs to be done");
});

app.listen(8081, () => {

    console.log("Express HTTP Running");
});

