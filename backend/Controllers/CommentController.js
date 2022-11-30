import CommentModel from "../Models/CommentModel.js";



export const getComment = async (req, res) => {
    try {
      let comment = await CommentModel.find({"postId":req.params.id})
                  .populate("userId")
                  .sort({ createdAt: -1 })
                 if (!comment[0]) {
                  comment.push({"postId":req.params.id})
                  console.log(comment);
                  res.status(200).json(comment)
                 }else{
                    console.log(comment);
                  res.status(200).json(comment)
                 }
      
    } catch (error) {
      res.status(500).json(error)
    }
  
  }

  // Add comment
  export  const addComment = async (req, res) => {
  try{
    console.log(req.body);
   // const post = await PostModel.findByIdAndUpdate(req.body.postId,{ $push: { comments:{"userId":req.body.userId,"comment":req.body.comment,"Date":new Date()} } });
  const comment = await CommentModel.create({...req.body})
  console.log(comment);
   return res.status(200).json("Post Commented");
  }catch(err){
    console.log(err);
  }
  
  }