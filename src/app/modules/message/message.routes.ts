import express from 'express';
import { MessageControllers } from './message.controller';

const router = express.Router();

router.post('/', MessageControllers.createMessage);
router.get('/', MessageControllers.getAllMessages);
router.get('/:id', MessageControllers.getSingleMessage);

export const MessageRoutes = router;
