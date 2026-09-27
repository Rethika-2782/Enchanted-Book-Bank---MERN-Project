import mongoose from 'mongoose';
const schema=new mongoose.Schema({book:{type:mongoose.Schema.Types.ObjectId,ref:'Book',required:true},accessionId:{type:String,unique:true,required:true},status:{type:String,enum:['Available','Issued','Reserved','Lost','Damaged','Maintenance'],default:'Available'},shelf:String,condition:{type:String,default:'Good'}},{timestamps:true});
export default mongoose.model('BookCopy',schema);
