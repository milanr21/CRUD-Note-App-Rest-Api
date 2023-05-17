import express from 'express';
import bodyParser from 'body-parser';

//middleware to access the frontend
import cors from 'cors';
import notesRoutes from './Routes/notes.js';

const app = express();

const portNo = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/', notesRoutes);
app.all('*', (req, resp) => resp.send("This page doesn't exist"));

//server running or not - verify
app.get('/', (req, resp) => resp.send('Express Connected!!'));

app.listen(portNo, () =>
  console.log(`Server is listening on the port: http//localhost:${portNo}`)
);
