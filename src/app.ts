import express, { Application } from 'express';
import cors from 'cors';

const app: Application = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/',)

// Steps: Interface -> Schema -> Model -> Database Query
export default app;