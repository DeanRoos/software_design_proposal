import express from 'express';
import cors from 'cors';

import { getCity } from '../database.js';

const app = express();

// app.get("/city", async (req, res) => {
//   const city = await getCity("Philadelphia")
//   res.send(city)
// })

app.use(cors());
app.use(express.json());

app.get('/message', async (req, res) => {
  const city = await getCity("Boston")
  console.log("The server file has recieved: " + JSON.stringify(city))
  res.json({ message: JSON.stringify(city)});
});

app.listen(8000, () => {
  console.log(`Server is running on port 8000.`);
});