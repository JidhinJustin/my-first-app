const express = require('express')
const app = express()
const port = 3000;


const API_KEY = '<API KEY>';


const axios = require('axios');
var cors = require('cors');
app.use(cors());

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

app.post('/signup', (req, res) => {
  // console.log(req.body.todo)

	axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]')
	.then(function (response) {
	    // console.log(response);
	    res.send(response.data);
	})
	.catch(function (error) {
		res.send(error)
	    // console.log(error);
	});
})

app.post('/signin', (req, res) => {

	axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]')
	.then(function (response) {
	    // console.log(response);
	    res.send(response.data);
	})
	.catch(function (error) {
		res.send(error)
	    // console.log(error);
	});
})

app.listen(port, () => {
  // console.log(`Example app listening at http://localhost:${port}`)
})