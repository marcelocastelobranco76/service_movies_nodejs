const filme = require('./filme');
const router = require('express').Router();

router.use('/filme', filme);

module.exports = router;
