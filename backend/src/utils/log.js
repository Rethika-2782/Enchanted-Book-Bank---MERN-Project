import AuditLog from '../models/AuditLog.js';
export async function log(req,action,description){try{await AuditLog.create({user:req.user?._id,action,description,ip:req.ip})}catch(e){console.error('audit log:',e.message)}}
