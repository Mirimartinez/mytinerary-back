var express = require('express');
var router = express.Router();
const cityRouter = require('./city')

/* GET home page. */
router.get('/', function(req, res, next) {
  /* res.json([]) */
  res.render('index', { title: 'cities'})
});



router.use('/city',cityRouter)



/* router.get('/:id', function(req, res, next) {
  
  res.json({
    id : req.params.id
  });
}); */





module.exports = router;
