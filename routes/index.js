var express = require ('express');
var router = express.Router();
const cityRouter = require('./cities')



/* GET home page. */

router.get('/', function(req, res, next) {
  /* res.json([]) */
  res.render('index', { title: 'cities'})
});


router.use('/cities',cityRouter)



/* router.get('/:id', function(req, res, next) {
  
  res.json({
    id : req.params.id
  });
}); */





module.exports = router;
