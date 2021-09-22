const router = require("express").Router();
const path = require("path");




//stats
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/stats.html'));
})


//exercise
router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/exercise.html'));
})
//index
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
})
module.exports = router;