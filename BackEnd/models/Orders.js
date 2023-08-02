const mongoose=require('mongoose')

// Model : A wrapper for the schema 
//Destructuring, taking out
const {Schema}=mongoose;

const OrderSchema= new Schema({
    email:{
        type: String,
        required : true,
        unique: true
    },
    order_data: {
        type:Array,
        required: true,

    }
})