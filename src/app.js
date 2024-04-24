import express from 'express';
import cors from 'cors';

import { web3Router } from './controllers/index.js';
import applyHandlers from './middlewares/error.api.handler.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/web3', web3Router);

applyHandlers(app);

export default app;
