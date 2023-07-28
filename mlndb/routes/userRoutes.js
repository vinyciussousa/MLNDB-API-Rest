const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/users', userController.getAllUsers);
router.get('/users/:username', userController.getUserByUsername);
router.post('/users', userController.createUser);
router.put('/users/:username', userController.updateUser);
router.delete('/users/:username', userController.deleteUser);

module.exports = router;
