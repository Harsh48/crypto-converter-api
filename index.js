const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 7000;

const app = express();

let whitelist = [
	"http://localhost:5173",
	"https://crypto-convertor-chi.vercel.app",
];
app.use(
	cors({
		origin: function (origin, callback) {
			if (whitelist.indexOf(origin) !== -1 || origin === undefined) {
				callback(null, true);
			} else {
				console.log(origin);
				callback(new Error("Not allowed by CORS"));
			}
		},
		methods: "GET,POST,PUT,DELETE",
		withCredentials: true,
	})
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Server is running on Port: ${PORT}`);
});
