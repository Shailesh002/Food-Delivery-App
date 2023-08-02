const mongoose=require('mongoose')

// Model : A wrapper for the schema 
//Destructuring, taking out
const {Schema}=mongoose;

//using mongoose schema we can add validation and somehow we are giving it a structure

const UserSchema= new Schema ({
    name :{
        type :String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

module.exports=mongoose.model('user',UserSchema);
