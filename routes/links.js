const express = require('express');
const router = express.Router();
const controller = require('../controllers/links-controller');
const admin = require('../controllers/user-controller');

//setando rotas
router.get('/', controller.getAll);
router.post('/admin/new/:id', admin.isAdmim, controller.createNewLink);
router.put('/:id', admin.isAdmim, controller.updateLink);
router.delete('/admin/:id', admin.isAdmim, controller.deleteLink);


module.exports = router;