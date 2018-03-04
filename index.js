let express = require('express');
let app = express();
let CONFIG = require(process.env.CONFIG);
let Root = CONFIG.root; 
CONFIG.routes.forEach((route) => {
	app.get(route,(req,res) => {
		res.sendFile(Root+route);
	});
});

app.listen(process.env.PORT || 3000, function () {
  console.log(`Example app listening on port ${process.env.PORT || 3000}!`);
});