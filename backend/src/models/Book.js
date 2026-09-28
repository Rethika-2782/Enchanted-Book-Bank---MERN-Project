import mongoose from 'mongoose';
const schema=new mongoose.Schema({
 title:{type:String,required:true,trim:true},author:{type:String,required:true},isbn:{type:String,required:true,unique:true},publisher:String,edition:String,year:Number,category:String,department:String,description:String,cover:String,shelf:String,totalCopies:{type:Number,default:1,min:0},availableCopies:{type:Number,default:1,min:0},price:{type:Number,default:0},softDeleted:{type:Boolean,default:false}
},{timestamps:true});
export default mongoose.model('Book',schema);
