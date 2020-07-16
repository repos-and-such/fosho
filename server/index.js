const express = require('express');
const app = express();

const items = require('./routes/api/items');
app.use('/api/items', items);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(__dirname + '/public'));
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started (port: ${port})`));
