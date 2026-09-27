import mongoose from 'mongoose';
const schema=new mongoose.Schema({transactionId:{type:String,unique:true},student:{type:mongoose.Schema.Types.ObjectId,ref:'User'},book:{type:mongoose.Schema.Types.ObjectId,ref:'Book'},copy:{type:mongoose.Schema.Types.ObjectId,ref:'BookCopy'},issueDate:Date,dueDate:Date,returnDate:Date,status:{type:String,enum:['Issued','Returned','Overdue','Lost'],default:'Issued'},issuedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'},returnedBy:{type:mongoose.Schema.Types.ObjectId,ref:'User'}},{timestamps:true});
schema.pre('save',function(next){if(!this.transactionId)this.transactionId='TXN-'+Date.now().toString(36).toUpperCase()+'-'+Math.random().toString(36).slice(2,7).toUpperCase();next()});
export default mongoose.model('Transaction',schema);
