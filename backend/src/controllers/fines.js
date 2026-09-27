import Fine from '../models/Fine.js';
export async function list(req,res){const q=req.user.role==='student'?{student:req.user._id}:{};res.json({fines:await Fine.find(q).populate('student','name studentId').populate('book','title').sort({createdAt:-1})})}
export async function pay(req,res){const f=await Fine.findByIdAndUpdate(req.params.id,{paymentStatus:'Paid'},{new:true});if(!f)return res.status(404).json({message:'Fine not found'});res.json({fine:f})}
export async function waive(req,res){const f=await Fine.findByIdAndUpdate(req.params.id,{paymentStatus:'Waived'},{new:true});if(!f)return res.status(404).json({message:'Fine not found'});res.json({fine:f})}
