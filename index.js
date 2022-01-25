const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.send("Thank you! yes no very good");
});

const users = ["anik", "barua", "pappu", "rahat", "rakesh"];

app.get("/users/:id", (req, res) => {
	const id = req.params.id;
	const name = users[id];
	res.send({ id, name });
});

app.post("/post", (req, res) => {
	const user = req.body;
    // console.log("data received", user)
	res.send(user);
});

app.listen(3000, () => console.log("Listening to port 3000"));
