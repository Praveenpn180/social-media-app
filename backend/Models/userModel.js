import mongoose from "mongoose";

const UserShema = mongoose.Schema(
    {
        email : {
            type : String,
            required : true,
        },
        phone : {
            type : Number,
            required : true,
        },

        password :{
            type : String,
            required : true,
        } ,

        firstName :{
            type : String,
            required : true,
        },

        lastName:{
            type : String,
            required : true,
        },

        isAdmin :{
            type : Boolean,
            default : false
        },
        block :{
          type:Boolean,
          default:false
        },

        profilePicture : String,
        coverPicture : String,
        about :String,
        livesin : String,
        worksAt : String,
        relationship : String,
        country:String,
        followers : [],
        following : [],
        savePost :[],
    },

    {timestamps : true}
)

const UserModel = mongoose.model("Users",UserShema);
export default UserModel