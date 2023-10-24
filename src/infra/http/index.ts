import express, { json } from 'express';

require('express-async-errors');

const app = express();

app.use(json());

export { app };
