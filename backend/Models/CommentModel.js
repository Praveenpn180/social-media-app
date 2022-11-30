import mongoose from "mongoose";
const commentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
       
        required: [true, 'Post is required'],
    },
    userId: {
        type: Object,
        required: [true, 'User is required'],
        ref: 'Users',
    },
    comment: {
        type: String,
        required: [true, "Comment description is required"]
    },
    
},
    {
        timestamps: true
    })
    const CommentModel = mongoose.model("Comments", commentSchema)
    export default CommentModel
