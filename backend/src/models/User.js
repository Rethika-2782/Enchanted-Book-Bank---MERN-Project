import mongoose from 'mongoose';
const schema=new mongoose.Schema({
 name:{type:String,required:true,trim:true},email:{type:String,required:true,unique:true,lowercase:true,trim:true},password:{type:String,required:true},role:{type:String,enum:['admin','librarian','student'],default:'student'},studentId:String,department:String,year:Number,section:String,phone:String,status:{type:String,enum:['active','inactive'],default:'active'}
},{timestamps:true});
export default mongoose.model('User',schema);
