// import express
let express = require("express");
// define server
let app = express();

// render react when backend runs
app.use(express.static('../portfolio-react-app/build'));
// send react app
app.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../portfolio-react-app/build/index.html'));
});
// server listening on port
let port = process.env.PORT || 1991
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});
