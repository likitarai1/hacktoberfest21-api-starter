const express = require('express');
const contestants = require('../services/contestants');
const router = new express.Router();
const db = require('./../connection');

router.get('/', async (req, res, next) => {
  db.query('SELECT * FROM contestants', (err, result) => {
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
  const name = req.body.name;
  const costume = req.body.costumeTitle;
  const costumeImg = req.body.costumeImgUrl;
  const city = req.body.city;
  const country = req.body.country;
  let id = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const n = characters.length;
  for (let i = 0; i < 6; i++) {
    id += characters.charAt(Math.floor(Math.random() * n));
  }
  if (name === '') {
    return res.status(400).send({ status: 'error', message: 'Must provide name' });
  } else if (costume === '') {
    return res.status(400).send({ status: 'error', message: 'Must provide costumeTitle' });
  } else if (costumeImg === '') {
    return res.status(400).send({ status: 'error', message: 'Must provide costumeImgUrl' });
  } else if (city === '') {
    return res.status(400).send({ status: 'error', message: 'Must provide city' });
  } else if (country === '') {
    return res.status(400).send({ status: 'error', message: 'Must provide country' });
  }
  db.query(
    'INSERT INTO contestants (id, name, costumeTitle, costumeImgUrl, city, country) VALUES (?,?,?,?,?,?)',
    [id, name, costume, costumeImg, city, country],
    (err, result) => {
      if (err) {
        res.status(500).send({
          error: err || 'Something went wrong.',
        });
      } else {
        res.status(201).send({ id: id, status: 'Contestant created successfully' });
      }
    }
  );
});

router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  db.query('SELECT * FROM contestants WHERE id=?', [id], (err, result) => {
    if (err) {
      res.status(500).send({
        error: err || 'Something went wrong.',
      });
    } else {
      if (result.length == 0) {
        res.status(404).send({ status: 'error', message: 'Contestant not found' });
      } else {
        res.status(200).send(result[0]);
      }
    }
  });
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
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send({ status: 'error', message: 'Provide correct details' });
  }
  db.query('UPDATE contestants SET ? WHERE id=?', [req.body, req.params.id], (err, result) => {
    if (err) {
      res.status(500).send({
        error: err || 'Something went wrong.',
      });
    } else {
      if (result.affectedRows == 0) {
        res.status(404).send({ status: 'error', message: 'Contestant not found' });
      } else {
        res.status(200).send({ status: 'ok' });
      }
    }
  });
});

router.patch('/:id/upvote', async (req, res, next) => {
  const id = req.params.id;
  db.query('UPDATE contestants SET votes = votes + 1 WHERE id = ?', [id], (err, result) => {
    if (err) {
      res.status(500).send({
        error: err || 'Something went wrong.',
      });
    } else {
      if (result.affectedRows == 0) {
        res.status(404).send({ status: 'error', message: 'Contestant not found' });
      } else {
        db.query('SELECT votes FROM contestants WHERE id=?', [id], (err, result) => {
          if (err) {
            res.status(500).send({
              error: err || 'Something went wrong.',
            });
          } else {
            console.log('votes :: ', result[0].votes);
            if (result.length == 0) {
              res.status(404).send({ status: 'error', message: 'Contestant not found' });
            } else {
              res.status(200).send({ status: 'ok', votes: result[0].votes });
            }
          }
        });
      }
    }
  });
});

module.exports = router;