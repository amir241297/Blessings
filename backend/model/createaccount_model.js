const mongoose=require('mongoose')

const accountSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    phone:{type:Number,required:true},
})

const AccountModel=mongoose.model("users_account_data",accountSchema) 

module.exports={AccountModel}