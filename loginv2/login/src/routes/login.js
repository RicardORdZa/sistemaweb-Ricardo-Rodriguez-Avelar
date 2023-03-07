const express = require('express');
//lo que se requerira en el procedimiento de "logincontroller"//
const LoginController = require('../controllers/LoginController');

const router = express.Router();
//rutas//
router.get('/login', LoginController.index);
router.get('/register', LoginController.register);
router.post('/register', LoginController.storeUser);
router.post('/auth', LoginController.auth);
router.get('/logout', LoginController.logout);

module.exports = router;