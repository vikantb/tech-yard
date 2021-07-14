
const express = require('express');
const {test,update} = require('../controller/controller');

const router = express.Router();

router.get('/test/:id', test);
router.post('/update', update);

module.exports =router