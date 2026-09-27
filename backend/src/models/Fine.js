import mongoose from 'mongoose';
const schema=new mongoose.Schema({student:{type:mongoose.Schema.Types.ObjectId,ref:'User'},transaction:{type:mongoose.Schema.Types.ObjectId,ref:'Transaction'},book:{type:mongoose.Schema.Types.ObjectId,ref:'Book'},dueDate:Date,returnDate:Date,overdueDays:{type:Number,default:0},amount:{type:Number,default:0},paymentStatus:{type:String,enum:['Pending','Paid','Waived'],default:'Pending'}},{timestamps:true});
export default mongoose.model('Fine',schema);
