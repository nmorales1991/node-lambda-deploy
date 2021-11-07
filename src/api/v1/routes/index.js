const { Router } = require('express');
const cats = require('./cats');

const router = Router();

router.use('/cats', cats);
router.get('/ping', (req, res) => res.send('PING v1'));

module.exports = router;
