import express from 'express';
const router = express.Router();
import {getComment , addComment} from "../Controllers/CommentController.js"



router.get('/getcomment/:id',getComment)
router.post('/addcomment',addComment)
export default router;