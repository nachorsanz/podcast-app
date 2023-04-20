const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(
  cors({
    origin: '*',
  }),
);

app.get('/', async (req, res) => {
  try {
    const response = await fetch(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
    );

    const data = await response?.json();
    res.send(data);
  } catch (error) {
    console.log('Error', error);
  }
});

app.get('/get-top-podcast', async (req, res) => {
  try {
    const response = await fetch(
      'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
    );

    const data = await response?.json();
    res.send(data);
  } catch (error) {
    console.log('Error', error);
  }
});

app.get('/get-podcast', async (req, res) => {
  try {
    const { id } = req.query;
    const response = await fetch(
      `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`,
    );

    const data = await response?.json();
    res.send(data);
  } catch (error) {
    console.log('Error', error);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
