import '@babel/polyfill';
import express from 'express';

const app = express();

app.post('/users', (req, res) => {
  // Handler logic for POST /user
  if (req.headers['content-length'] === 0) {
    res.status(400);
    res.set('Content-Type', 'application/json');
    res.json({
      message: 'Payload should not be empty',
    });
    return;
  }
  if (req.headers['content-type'] !== 'application/json') {
    res.status(415);
    res.set('Content-Type', 'application/json');
    res.json({
      message: 'The "Content-Type" header must always be "applicaton/json"',
    });
    return;
  }
  res.status(400);
  res.set('Content-Type', 'application/json');
  res.json({
    message: 'Payload should be in JSON format',
  });
});

app.listen(process.env.SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Hobnob API server listening on port ${process.env.SERVER_PORT}!`);
});
