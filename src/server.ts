import express, { Application } from 'express';
import cors from 'cors';
import { router }  from './student/student.router';
const PORT = 4000;

const app: Application = express();
// app.use(cors);
app.use(express.json());

app.use('/students', router);

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
