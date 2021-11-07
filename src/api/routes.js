const { Router } = require('express');
const v1 = require('./v1/routes');

const router = Router();

router.use('/server/v1', v1);
router.get('/ping', (req, res) => res.send('PING'));

module.exports = router;
