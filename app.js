const express =require('express');
const path =require('path')
const bodyParser=require('body-parser')
const app=express();

const userRouter=require('./routes/userRouter')
const adminRouter=require('./routes/adminRouter')

app.use(userRouter)
app.use(express.urlencoded()); 
app.use(adminRouter)

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'views','404.html')) 
    })
    




const port=4000;
app.listen(port,()=>{
    console.log(`server is running at http://localhost:${port}`)
})
