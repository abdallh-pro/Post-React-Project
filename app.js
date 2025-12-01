// server.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/',(res,req)=>{
    res.send("hello wold");
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});