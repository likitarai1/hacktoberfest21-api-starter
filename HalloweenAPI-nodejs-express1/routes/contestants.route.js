const express = require('express');
const contestants = require('../services/contestants');
const router = new express.Router();

router.get('/', async (req, res, next) => {
  let options = {
    id: 'qwerty',
    name: 'Abhinav Asthana',
    costumeTitle: 'Astronaut',
    costumeImgUrl:
      'https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
    city: 'San Francisco',
    country: 'USA',
    votes: 12,
  };

  try {
    const result = await contestants.getContestants(options);
    res.status(result.status || 200).send(result.data);
  } catch (err) {
    return res.status(500).send({
      error: err || 'Something went wrong.',
    });
  }
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
