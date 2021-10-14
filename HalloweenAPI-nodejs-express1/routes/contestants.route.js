const express = require('express');
const contestants = require('../services/contestants');
const router = new express.Router();
const db = require('./../connection');

router.get('/', async (req, res, next) => {
  db.query('Select * from contestants', (err, result) => {
    if (err) {
      res.status(500).send({
        error: err || 'Something went wrong.',
      });
    } else {
      res.status(200).send(result);
    }
  });
});

router.post('/', async (req, res, next) => {
  let options = {};

  options.createContestantInlineReqJson = req.body;

  try {
    const result = await contestants.createContestant(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.',
    });
  }
});

router.get('/:id', async (req, res, next) => {
  let options = {
    id: req.params.id,
  };

  try {
    const result = await contestants.getContestant(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.',
    });
  }
});

router.delete('/:id', async (req, res, next) => {
  let options = {
    id: req.params.id,
  };

  try {
    const result = await contestants.deleteContestant(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.',
    });
  }
});

router.patch('/:id', async (req, res, next) => {
  let options = {
    id: req.params.id,
  };

  try {
    const result = await contestants.updateContestant(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.',
    });
  }
});

router.patch('/:id/upvote', async (req, res, next) => {
  let options = {
    id: req.params.id,
  };

  try {
    const result = await contestants.upvoteContestant(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.',
    });
  }
});

module.exports = router;
