import Book from '../models/Book.js';import BookCopy from '../models/BookCopy.js';import {log} from '../utils/log.js';import User from '../models/User.js';import Notification from '../models/Notification.js';
export async function list(req,res){const {search,category,department,available}=req.query;const q={softDeleted:false};if(search)q.$or=[{title:new RegExp(search,'i')},{author:new RegExp(search,'i')},{isbn:new RegExp(search,'i')},{publisher:new RegExp(search,'i')}];if(category)q.category=category;if(department)q.department=department;if(available==='true')q.availableCopies={$gt:0};res.json({books:await Book.find(q).sort({title:1})})}
export async function get(req,res){const b=await Book.findById(req.params.id);if(!b||b.softDeleted)return res.status(404).json({message:'Book not found'});res.json({book:b,copies:await BookCopy.find({book:b._id})})}
export async function create(req,res){const b=await Book.create({...req.body,totalCopies:Number(req.body.totalCopies||1),availableCopies:Number(req.body.totalCopies||1)});for(let i=1;i<=b.totalCopies;i++)await BookCopy.create({book:b._id,accessionId:`ACC-${b.isbn}-${i}`,shelf:b.shelf});await log(req,'BOOK_CREATE',b.title);
const students=await User.find({role:'student'});
const notes=students.map(s=>({user:s._id,title:'New Book Arrival!',message:`"${b.title}" has just arrived at the Enchanted Book Bank. Check it out!`}));
if(notes.length) await Notification.insertMany(notes);
res.status(201).json({book:b})}
export async function update(req,res){const b=await Book.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true});if(!b)return res.status(404).json({message:'Book not found'});await log(req,'BOOK_UPDATE',b.title);res.json({book:b})}
export async function remove(req,res){const b=await Book.findByIdAndUpdate(req.params.id,{softDeleted:true},{new:true});if(!b)return res.status(404).json({message:'Book not found'});await log(req,'BOOK_DELETE',b.title);res.json({message:'Book archived'})}
