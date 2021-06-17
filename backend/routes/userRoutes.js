import express from 'express'

import {authUsers} from '../controllers/userController.js'
import{protect} from '../middlewares/authMiddleware.js'


const router = express.Router();



router.post('/login', authUsers)
router.get("/profile", protect, (req, res) => {
    res.send({ user: req.user });
});


export default router;
