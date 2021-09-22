  const router = require("express").Router();

//const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
//const workouts = require('./workouts');

//router.use('/api', apiRoutes);
router.use('/', homeRoutes);
//router.use('/api/workouts');

module.exports = router;