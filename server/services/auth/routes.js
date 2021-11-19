const express = require('express');
const router = express.Router();

router.get('/auth', function(request, response){
    response.send("Auth page")
  });

router.post('/auth', function(request, response){
    console.log(request.headers)
    console.log(request.body)
    response.json({requestBody: request.body})
  });
  
module.exports = router;