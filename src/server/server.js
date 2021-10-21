import express from 'express';
import ReactDOM from 'react-dom/server';
import { indexTemplate } from "./indexTemplate";
import {App} from "../App";
import axios from "axios";
import compression from "compression";
import helmet from "helmet";

const PORT = process.env.PORT || 3000;
const IS_DEV = process.env.NODE_ENV !== "production";
const CLIENT_ID = "osZ12PKTJLgo5A";
const SECRET = "IYUFUkYA26vnMpXacVKg6WrfgGQXRA";
const URI = "http://localhost:3000/auth";

const app = express();

app.use(compression());
app.use(helmet(
	{
		contentSecurityPolicy: false
	}
));

app.use('/static', express.static('./dist/client'));

app.get('/auth', (req, res) => {
	axios.post(
		'https://www.reddit.com/api/v1/access_token',
		`grant_type=authorization_code&code=${req.query.code}&redirect_uri=${URI}`,
		{
			auth: { username: "osZ12PKTJLgo5A", password: "IYUFUkYA26vnMpXacVKg6WrfgGQXRA" },
			headers: { 'Content-type': 'application/x-www-form-urlencoded' }
		}
	)
	.then(({ data }) => {
		res.send(
			indexTemplate(ReactDOM.renderToString(App()), data['access_token']),
		);
	})
	.catch(console.log);
});

app.get('*', (req, res) => {
	res.send(indexTemplate(ReactDOM.renderToString(App())),
	);
});

app.listen(PORT, ()=> {

	console.log(`Server started on http://localhost:${PORT}`);
})