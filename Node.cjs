const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const port = 3001; // You can choose any port

app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.post('/send-to-colab', async (req, res) => {
  const { inputText } = req.body;

  try {
    console.log("ohk");
    const colabResponse = await axios.get('https://e9d0-34-147-83-121.ngrok-free.app/');

    const response = colabResponse.data;
    res.json(response);
  } catch (error) {
    console.error('Error sending data to Colab:', error);
    res.status(500).json('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
