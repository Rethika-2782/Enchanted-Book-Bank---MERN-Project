import mongoose from 'mongoose';
const schema=new mongoose.Schema({student:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},book:{type:mongoose.Schema.Types.ObjectId,ref:'Book',required:true},status:{type:String,enum:['Pending','Approved','Rejected','Issued','Cancelled','Completed'],default:'Pending'},priority:{type:String,enum:['Normal','High'],default:'Normal'},remarks:String},{timestamps:true});
export default mongoose.model('BookRequest',schema);
