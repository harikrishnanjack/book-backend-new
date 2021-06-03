import express,{Application,Request,Response,NextFunction} from 'express';

const app:Application=express();

const port=process.env.PORT || 5000;

app.get('/',(req:Request,res:Response,next:NextFunction)=>{
  res.send("Hello from server")
})

app.listen(port,()=>{
  console.log("Server Listen @",`${port}`)
})
