const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Def

app.get('/', (req, res) => {
  res.send("All systems go 👍🏽");
})

app.listen(PORT, () => {
  console.log(`Practice app listening on port ${PORT}!`);
});