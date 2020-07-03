require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(require('./routes'))

app.listen(process.env.PORT || 4000);