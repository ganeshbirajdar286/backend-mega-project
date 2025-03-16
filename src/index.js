import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path:"./env"
})
connectDB();





// first method 
// (async ()=>{
//   try {
//    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)  // USE TO CONNECT DATABASE  
//        app.on("error",(error)=>{
//         console.log("ERRR:",error)
//         throw error
//        })

//      app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on PORT ${process.env.PORT}`);
        
//      })
//   } catch (error) {
//     console.error("ERROR: ",error)
//     throw err
//   }
// })()