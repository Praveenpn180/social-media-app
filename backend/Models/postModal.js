import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    userId :{type:String,required : true,
   },
    desc : String,
    likes :[],
    image : String
     
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
timestamps : true}
)
PostSchema.virtual('user', {
    ref: 'Users',
    foreignField: '_id',
    localField: 'userId',
  })


const PostModel = mongoose.model("posts",PostSchema)
export default PostModel