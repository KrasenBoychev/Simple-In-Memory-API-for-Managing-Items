import express, { Request, Response } from 'express';
import { itemsRouter } from './controllers/itemsController';
import { databaseArr } from './database';


export default function configApp() {
    const app = express();
    const port = process.env.PORT || 3000;

    app.use(express.json());
    app.use('/items', itemsRouter);

    app.get('/', (req: Request, res: Response) => {
        res.send('App is working');
    });

    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}