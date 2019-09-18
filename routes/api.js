const express = require('express');
const router = express.Router();
const System = require('../models/systems');

router.get('/systems', function (request, response) {
    response.send({
        type: 'GET'
    })
});

// add new system to db
router.post('/systems', function (request, response) {
    var system = new System(request.body);
    system.save();

    System.create(request.body);

    response.send({
        type: 'POST',
        name: system.name,
        rank: system.rank
    })
});

// update a system in the db
router.put('/systems/:id', function (request, response) {
    response.send({
        type: 'PUT'
    });
});

// delete a system from db
router.delete('/systems/:id', function (request, response) {
    response.send({
        type: 'DELETE'
    })
});


module.exports = router;