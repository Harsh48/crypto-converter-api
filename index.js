const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 7000;

const app = express();

let whitelist = [
	"http://localhost:5173",
	"https://crypto-converter-ecru.vercel.app",
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

app.use("/api", require("./routes/crypto.route"));

app.listen(PORT, () => {
	console.log(`Server is running on Port: ${PORT}`);
});
