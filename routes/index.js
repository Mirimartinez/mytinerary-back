var express = require ('express');
var router = express.Router();
const cityRouter = require('./cities')
const authRouter = require('./auth')
const itinerariesRouter = require('./itineraries')
const activitiesRouter = require('./activities')
const commentRouter = require('./comment')

/* GET home page. */
router.get('/', function(req, res, next) {
  /* res.json([]) */
  res.render('index', { title: 'cities'})
});


router.use('/cities',cityRouter)
router.use('/auth', authRouter)
router.use('/itineraries', itinerariesRouter)
router.use('/activities', activitiesRouter)
router.use('/comments', commentRouter)

module.exports = router;
