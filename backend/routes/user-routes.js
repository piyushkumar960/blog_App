import express from 'express';
import { getAllUser, signin, signup } from '../controller/user-controller';

const router=express.Router();

router.get("/",getAllUser);
router.post("/signup",signup);
router.post("/signin", signin);

export default router;


