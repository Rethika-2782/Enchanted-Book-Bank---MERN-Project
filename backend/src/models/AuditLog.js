import mongoose from 'mongoose';
const schema=new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},action:String,description:String,ip:String},{timestamps:true});
export default mongoose.model('AuditLog',schema);
