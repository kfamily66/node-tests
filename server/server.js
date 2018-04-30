const express = require('express');
var port = process.env.PORT || 3000;
var app = express();

app.get('/', (req, res) => {
    res.send('Hello server!')
});

app.get('/users', (req, res) => {
    res.status(200).send([{
            name: 'Eugene',
            age: 24
        },
        {
            name: 'Polina',
            age: 24
        },
        {
            name: 'Maximus',
            age: 6
        }
    ])
})

app.listen(port);

module.exports.app = app;