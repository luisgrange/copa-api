import express from "express";
import { router } from './routes/routes';
import swaggerUi from 'swagger-ui-express';

import doc from "./swagger.json";

const app = express();

app.use(express.json());
app.use(router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(doc))

export {app}