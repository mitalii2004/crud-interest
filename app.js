const express = require("express");
const app = express();
require("./dbconnection").connectiondb();
const port = 2668;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
