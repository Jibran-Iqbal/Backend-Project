import express from 'express';
import {  getRests } from '../controllers/controller.js';


const router = express.Router();

router.get('/',getRests);

export default router;