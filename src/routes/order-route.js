'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/order-controller');
const authService = require('../services/auth-service');

// GET
router.get('/', authService.authorize, controller.get);

// POST
router.post('/', authService.authorize, controller.post);

module.exports = router;