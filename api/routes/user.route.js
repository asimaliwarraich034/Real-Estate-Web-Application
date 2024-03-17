// user.route.js
import express from 'express';
import { test } from '../controller/user.controller.js'; // Adjust the path here

const router = express.Router();

router.get('/test', test);

export default router;
