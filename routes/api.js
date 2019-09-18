const express = require('express');
const router = express.Router();

router.get('/systems', function (request, response) {
    response.send({
        type: 'GET'
    })
});

// add new system to db
router.post('/systems', function (request, response) {
    console.log(request.body);
    response.send({
        type: 'POST',
        name: request.body.name,
        rank: request.body.rank
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