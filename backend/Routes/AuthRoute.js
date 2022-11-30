import express from 'express';
import { loginUser, registerUser ,otpVerification } from '../Controllers/AuthController.js';

const router = express.Router();

router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/verifyotp',otpVerification)



export default router;