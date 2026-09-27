import User from '../models/User.js';
export async function students(req,res){const q={role:'student'};if(req.query.search)q.$or=[{name:new RegExp(req.query.search,'i')},{email:new RegExp(req.query.search,'i')},{studentId:new RegExp(req.query.search,'i')}];res.json({students:await User.find(q).select('-password').sort({name:1})})}
