// import Todo from '../models/Todo.js'

// const getTodo = async(req,res)=>{
//     try{
//         const todoss= await Todo.find({});

//         res.status(200)
//         .json({
//             success:true,
//             data:todoss,
//             message:"todo is fetched"
//         })
//     }
//     catch(error){
//         console.error(error);
//         res.send(500).json({
//             success:false,
//             data:'internal server22 error',
//             message:error.message
//         })
//     }
// }

// export default getTodo;