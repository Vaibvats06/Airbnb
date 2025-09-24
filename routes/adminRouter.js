const express =require('express')
const path =require('path')
const adminRouter=express.Router();

adminRouter.get('/host/add-home',(req,res,next)=>{  
    res.sendFile(path.join(__dirname,'../','views','addHome.html'))
})

adminRouter.post('/host/add-home',(req,res)=>{
    console.log(req.body)
    const params=req.body;
    res.sendFile(path.join(__dirname,'../','views','homeAdded.html')) 
})

module.exports =adminRouter;