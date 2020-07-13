const express = require('express');
const router = express.Router();
const controller = require('../controllers/links-controller');


//setando rotas
router.get('/', controller.getAll);
router.post('/', controller.createNewLink);
router.put('/:id', controller.updateLink);
router.delete('/admin/:id', controller.deleteLink);


module.exports = router;