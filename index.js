import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import expenseRoute from "./routes/expense.route.js";
dotenv.config({});


const app = express();
const PORT = process.env.PORT || 8000;
//middleware
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions = {
  origin: "https://expensify-frontend-nine.vercel.app", // Updated to the deployed frontend URL
  credentials: true
};

app.use(cors(corsOptions));


//api
app.use("/api/v1/user", userRoute); // http:localhost:5173/api/v1/user/register

app.use("/api/v1/expense", expenseRoute);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at port ${PORT}`);
})
