require('dotenv').config();

const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Flowers REST API is running' });
});

app.get('/api/flowers', (req, res) => {
  const sql = 'SELECT * FROM flowers ORDER BY id';

  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Unable to fetch flowers',
        error: err.message
      });
    }

    res.json({
      success: true,
      count: results.length,
      data: results
    });
  });
});

app.get('/api/flowers/:id', (req, res) => {
  const flowerId = req.params.id;

  const sql = 'SELECT * FROM flowers WHERE id = ?';

  db.query(sql, [flowerId], (err, results) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Unable to fetch flower',
        error: err.message
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: false,
        message: 'Flower not found'
      });
    }

    res.json({
      success: true,
      data: results[0]
    });
  });
});

app.post('/api/flowers', (req, res) => {
  const { name, color, price, imageurl, likes } = req.body;

  const sql = `
    INSERT INTO flowers (name, color, price, imageurl, likes)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(sql, [name, color, price, imageurl, likes], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Unable to add flower',
        error: err.message
      });
    }

    res.status(201).json({
      success: true,
      message: 'Flower added successfully',
      id: result.insertId
    });
  });
});

app.put('/api/flowers/:id', (req, res) => {
  const flowerId = req.params.id;
  const { name, color, price, imageurl, likes } = req.body;

  const sql = `
    UPDATE flowers
    SET name = ?, color = ?, price = ?, imageurl = ?, likes = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [name, color, price, imageurl, likes, flowerId],
    (err, result) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Unable to update flower',
          error: err.message
        });
      }

      res.json({
        success: true,
        message: 'Flower updated successfully'
      });
    }
  );
});

app.delete('/api/flowers/:id', (req, res) => {
  const flowerId = req.params.id;

  const sql = 'DELETE FROM flowers WHERE id = ?';

  db.query(sql, [flowerId], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Unable to delete flower',
        error: err.message
      });
    }

    res.json({
      success: true,
      message: 'Flower deleted successfully'
    });
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});