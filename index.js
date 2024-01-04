const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 7000;

const app = express();

app.listen(PORT, () => {
	console.log(`Server is running on Port: ${PORT}`);
});
