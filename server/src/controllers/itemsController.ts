import { Router } from "express";
import { databaseArr } from "../database";
import { ItemInterface } from "../interfaces & types/ItemInterface";
import { v4 as uuidv4 } from 'uuid';

export const itemsRouter = Router();

itemsRouter.get('/items', (req, res) => {
    res.status(200).json(databaseArr);
});

itemsRouter.post('/items', (req, res) => {
    const unique_id = uuidv4();

    const newItem: ItemInterface = {
        _id: unique_id,
        name: req.body.name,
    };
    databaseArr.push(newItem);
    res.status(201).json(newItem);
});