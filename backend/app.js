import express, { Router } from 'express';
import mongoose, { connect } from 'mongoose';
import router from './routes/user-routes';
import blogRouter from './routes/blog-routes';
import cors from 'cors';
import dotenv from "dotenv";



dotenv.config();
const app=express();

app.use(cors());
app.use(express.json());
app.use("/api/user",router);
app.use("/api/blog",blogRouter);



mongoose
.connect(process.env.CONNECT_URL
).then(()=>app.listen(5000)).then(()=>console.log("connected to data base and listining to port 5000"))
.catch((err)=>console.log(err));


