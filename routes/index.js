var express = require ('express');
var router = express.Router();
const cityRouter = require('./city')

/* GET home page. */
router.get('/', function(req, res, next) {
  /* res.json([]) */
  res.render('index', { title: 'cities'})
});


<<<<<<< HEAD
router.use('/cities',cityRouter)
=======

router.use('/city',cityRouter)
>>>>>>> 0e93de36284100e31481f501bd952a4a2217c957



/* router.get('/:id', function(req, res, next) {
  
  res.json({
    id : req.params.id
  });
}); */





module.exports = router;
