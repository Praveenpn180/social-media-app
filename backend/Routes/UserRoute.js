import express from 'express'
import { deleteUser, followUser, getAllUsers, getUser, unFollowUser,
 updateUser,updateUserAdmin,postSave ,getFriends } from '../Controllers/UserController.js';

 
import authMiddleware from '../middleware/authMiddleware.js';
const router = express.Router();

router.get('/',getAllUsers)
router.get('/:id',authMiddleware,getUser)
router.put('/update/:id',authMiddleware,updateUser)
router.delete('/:id',authMiddleware,deleteUser)
router.put('/:id/follow',authMiddleware,followUser)
router.put('/:id/unfollow',authMiddleware,unFollowUser)
router.put('/user/:id',updateUserAdmin)
router.put('/:id/:userId',postSave)
router.get('/friends/:id',getFriends)



export default router;