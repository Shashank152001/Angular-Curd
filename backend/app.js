const express=require('express')
const app=express()
const mongoose=require('mongoose')
const routes=require('./routes/routes')
const cors=require('cors')
mongoose.connect("mongodb://127.0.0.1:27017/empDatabase",{useNewUrlParser:true,useUnifiedTopology:true},function checkDB(error){
    if(error){
        console.log('error')
    }else{
        console.log('DB successfully connected')
    }
})
app.use(cors())
app.use(express.json())
app.use(routes)



app.listen(5000,()=>{
    console.log('Server running on port 5000')
})