'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/customer-controller');
const authService = require('../services/auth-service');

// POST
router.post('/',controller.post);
router.post('/auth',controller.authenticate);
router.post('/refresh-token', authService.authorize, controller.refreshToken);

module.exports = router;