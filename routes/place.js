var express = require('express');
var router = express.Router();
require('../models/connection');
const Place = require('../models/place');


router.post('/', (req, res) => {
    
        const newPlace = new Place({
            nickname : req.body.nickname,
            name: req.body.name,
            latitude : req.body.latitude,
            longitude : req.body.longitude,
        });
  
        newPlace.save().then(data => {
          res.json({ result: true , data : data});
        });
  });

router.get('/:nickname', (req, res)=> { 
 Place.find({ nickname : req.params.nickname })
  .then(places => {
   res.json({ result: true, places });
        });
     });

router.delete("/", (req, res) => {
        Place.deleteOne({ nickname: req.body.nickname , name : req.body.name }).then(() => {
                res.json({ result: true});
              });
            });
        

  module.exports = router;