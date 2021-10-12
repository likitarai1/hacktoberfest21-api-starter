const express = require('express');
const root = require('../services/root');
const router = new express.Router();

router.get('/', async (req, res, next) => {
  console.log('here');
  let options = {
    status: 'OK',
  };

  try {
    const result = await root.get(options);
    res.status(result.status || 200).send(result.data);
    // res.status(200).send({ status: 200, msg: 'OK' });
  } catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.',
    });
  }
});

module.exports = router;
