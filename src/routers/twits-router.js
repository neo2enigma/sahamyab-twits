import { Router } from "express";
import * as controllerTwits from '../controllers/twits-controller.js';


const router = Router();

// Twits routes
router.get('/:username', controllerTwits.getTwits);
router.delete('/:id', controllerTwits.deleteTwit);
router.post('/', controllerTwits.addTwits);

export default router;
