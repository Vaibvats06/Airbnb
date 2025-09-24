const express =require('express')
const path =require('path')
const userRouter=express.Router();

userRouter.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','Home.html'))
})

module.exports =userRouter;