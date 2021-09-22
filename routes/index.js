const router = require("express").Router();

const apiRoutes = require('./api');
const homeRoutes = require('./htmlRoutes');
//const workouts = require('./workouts');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
//router.use('/workouts',workouts);

module.exports = router;