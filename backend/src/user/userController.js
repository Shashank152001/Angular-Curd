const userService=require('./userService');


const getDataControllerfn=async(req,res)=>{
    const empolyee=await userService.getDataFromDBService();
    res.send({"status":true,"data":empolyee});
}
const createUserControllerfn=async(req,res)=>{
    console.log(req.body);
    const status=await userService.createUserDBService(req.body);
    console.log(status);

    if(status){
        res.send({"status":true,"message":"User Created Successfully"})
    }else{
        res.send({"status":false,"message":"Error Creating user"})
    }
}

const updateUserController=async(req,res)=>{
    console.log(req.params.id);
    console.log(req.body);
    const result=await userService.updateOneUserDBService(req.params.id,req.body);
    if(result){
        res.send({"status":true,"message":"User Updated"})
    }else{
        res.send({"status":false,"message":"User Update Fail"})
    }
}

const deleteUserController=async(req,res)=>{
     console.log(req.body);
     const result=await userService.removeOneUserDBService(req.params.id);
     if(result){
        res.send({"status":true,"message":"User Successfully deleted"})
     }else{
        res.send({"status":false,"message":"Oops User can't deleted"})
     }
}
module.exports={ getDataControllerfn,createUserControllerfn,updateUserController,deleteUserController}