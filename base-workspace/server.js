
const Express = require('express');
const Cors = require('cors');
const BodyParser = require('body-parser');

const app = Express();
app.use(Cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.get('/personnel', (req, res) => {

	const data = [];
	for (let i = 0; i < 1000; i++) {
		data.push({ id: i, name: i + ' Jean Luc', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" });
		// data.push({ id: i, name: i + ' Worf',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" });
		// data.push({ id: i, name: i + ' Deanna',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" });
		// data.push({ id: i, name: i + ' Data',     email: "mr.data@enterprise.com",        phone: "555-444-4444" });
	}



	res.json({
		items: data,
		total: data.length
	});
});

app.post('/personnel', (req, res) => {
	console.log(req.body);
	res.json({
		success: true
	});
});

app.post('/login', (req, res) => {
	if (req.body.login == 'ivan' && req.body.password == '1') {
		res.json({
			success: true
		});
	} else {
		res.json({
			success: false
		});
	}
});

const port = 3000;

app.listen(port, () => {
	console.log(`Сервер слушает по адресу 'http://localhost:${port}'.`);
});