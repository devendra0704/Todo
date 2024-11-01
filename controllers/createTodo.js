// import Todo from '../models/Todo.js'

// const createTodo = async(req,res)=>{
//     try{
//         const {title,description}=req.body;
//         const response=await Todo.create({title,description});
//         res.status(200).json(
//             {
//                 success:true,
//                 data:response,
//                 message:'entry created successfully'
//             }
//         )
//     }
//     catch(error){
//         console.error(error);
//         res.send(500).json({
//             success:false,
//             data:'internal server error',
//             message:error.message
//         })
//     }
// }

// export default createTodo;