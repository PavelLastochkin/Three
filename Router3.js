const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
    res.status(200).type('text/plain')
    res.send('Ваши данные')
  })

  module.exports=router;
