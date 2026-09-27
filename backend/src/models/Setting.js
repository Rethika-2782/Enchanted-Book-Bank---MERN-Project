import mongoose from 'mongoose';
const schema=new mongoose.Schema({maxActiveBooks:{type:Number,default:5},borrowDays:{type:Number,default:14},finePerDay:{type:Number,default:2},maxRenewals:{type:Number,default:1},institutionName:{type:String,default:'The Enchanted Book Bank'},contact:String,address:String});
export default mongoose.model('Setting',schema);
