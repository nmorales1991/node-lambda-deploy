const { Router } = require('express');
const CatsController = require('../controllers/CatsController');

const router = Router();

router.get('/', CatsController.getAllCats);
router.get('/ping', (req, res) => res.send('PING CATS'));

module.exports = router;
