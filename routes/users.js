const express = require('express');
const router = express.Router();
const repository= require('../controllers/user-controller');


router.post('/',repository.createNewUser);
router.get('/',repository.getAll);
router.put('/:id',repository.updateUser);
router.delete('/admin/:id',repository.deleteUser);

module.exports = router;